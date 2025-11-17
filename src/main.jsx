import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import PetDetails from './pages/PetDetails.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/pet/:id" element={<PetDetails />} />
		</Routes>
	</BrowserRouter>
);
