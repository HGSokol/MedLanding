import { createContext, Dispatch, SetStateAction, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { createLazyComponent } from './utils/createLazyComponent';
import loading from './assets/loading.svg';

const Home = createLazyComponent(() => import('./Pages/Home'));
const Services = createLazyComponent(() => import('./Pages/Services'));
const Doctors = createLazyComponent(() => import('./Pages/Doctors'));
const Clinic = createLazyComponent(() => import('./Pages/Clinic'));
const Contacts = createLazyComponent(() => import('./Pages/Contacts'));
const Doctor = createLazyComponent(() => import('./Pages/Doctor'));
const NotFound = createLazyComponent(() => import('./Pages/NotFound'));

type ProfileContext = {
	activePopup: boolean;
	setActivePopup: Dispatch<SetStateAction<boolean>>;
	send: boolean;
	setSend: Dispatch<SetStateAction<boolean>>;
	doctorName: string;
	setDoctorName: Dispatch<SetStateAction<string>>;
	serviceName: string;
	setServiceName: Dispatch<SetStateAction<string>>;
	fixedHeader: boolean;
	setFixedHeader: Dispatch<SetStateAction<boolean>>;
	currentTabService: number;
	setCurrentTabService: Dispatch<SetStateAction<number>>;
};

const AppData: ProfileContext = {
	activePopup: false,
	setActivePopup: () => {},
	send: false,
	setSend: () => {},
	doctorName: '',
	setDoctorName: () => {},
	serviceName: '',
	setServiceName: () => {},
	fixedHeader: false,
	setFixedHeader: () => {},
	currentTabService: 0,
	setCurrentTabService: () => {},
};

export const AppContext = createContext<ProfileContext>(AppData);

export default function App() {
	const [activePopup, setActivePopup] = useState(false);
	const [send, setSend] = useState(false);
	const [doctorName, setDoctorName] = useState('');
	const [serviceName, setServiceName] = useState('');
	const [fixedHeader, setFixedHeader] = useState(false);
	const [currentTabService, setCurrentTabService] = useState(0);

	return (
		<AppContext.Provider
			value={{
				activePopup,
				setActivePopup,
				send,
				setSend,
				doctorName,
				setDoctorName,
				serviceName,
				setServiceName,
				fixedHeader,
				setFixedHeader,
				currentTabService,
				setCurrentTabService,
			}}>
			<Suspense
				fallback={
					<div className="w-[100vw] h-[100vh] flex items-center justify-center">
						<img className="w-[50rem] h-[50rem]" src={loading} alt="loading" />
					</div>
				}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/doctors" element={<Doctors />} />
					<Route path="/doctors/:name" element={<Doctor />} />
					<Route path="/clinic" element={<Clinic />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</AppContext.Provider>
	);
}
