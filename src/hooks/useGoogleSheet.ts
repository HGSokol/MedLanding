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
        csvText = csvText.replace(/,\S/g, e => {
            e.split('')
            return `*~${e[1]}`
        }).replace(/\"/g, '')

        
        const rows = csvText.split(/\r?\n/); 
        const data = [];        
        for (let i = 1; i < rows.length; i++) {
            const rowObject = {};
            const rowData = rows[i].split(`*~`)

            if(rowData[0] !== '') {
                rowObject[rowData[0]] = []
                data.push(rowObject);
            } else {
                const currentObj = data[data.length-1]
                const key = Object.keys(currentObj)[0]

                currentObj[key].push({
                    serviceName: rowData[1],
                    price: rowData[2]
                })
            }
        }

        return data;
    }
    return csvData;
}