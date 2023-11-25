import { useEffect, useState } from 'react'
import axios from 'axios'; // Import Axios

export default function useGoogleSheet() {
    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        fetchCSVData(); 
    }, []); 

    function fetchCSVData () {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRM1fAY1cJZyc0oWWYvPPuAzk3-ASG2132sHZcufM9bKlTsoST8KgwO4RsKT2KPM8JKFkqn22zYIGJ7/pub?output=csv'; 

        axios.get(csvUrl)  
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);        
                setCsvData(parsedCsvData);        
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
    }

    function parseCSV(csvText: string) {
        const rows = csvText.split(/\r?\n/); 
        const headers = rows[0].split(','); 
        const data = [];        
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(','); 
            const rowObject = {};
            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j]] = rowData[j];
            }
            data.push(rowObject);
        }
        return data;
    }
    return csvData;
}