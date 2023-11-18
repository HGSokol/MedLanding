import { createContext, Dispatch, lazy, SetStateAction, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Doctor from './Pages/Doctor';

const Home = lazy(() => import('./Pages/Home'));
const Price = lazy(() => import('./Pages/Price'));
const Doctors = lazy(() => import('./Pages/Doctors'));
const NotFound = lazy(() => import('./Pages/NotFound'));

type ProfileContext = {
	activePopup: boolean;
	setActivePopup: Dispatch<SetStateAction<boolean>>;
};

const AppData: ProfileContext = {
	activePopup: false,
	setActivePopup: () => {},
};

export const AppContext = createContext<ProfileContext>(AppData);

export default function App() {
	const [activePopup, setActivePopup] = useState(false);

	return (
		<AppContext.Provider
			value={{
				activePopup,
				setActivePopup,
			}}>
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/price" element={<Price />} />
					<Route path="/doctors" element={<Doctors />} />
					<Route path="/doctors/:name" element={<Doctor />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</AppContext.Provider>
	);
}
