import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('./Pages/Home'));
const NotFound = lazy(() => import('./Pages/NotFound'));


export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}


