import './styles/main.sass';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './pages/Home';
import PetDetails from './pages/PetDetails';
import Onboarding from './pages/Onboarding';
import petLoader from './loaders/petLoader';
import petDetailsLoader from './loaders/petDetailsLoader';
import userLoader from './loaders/userLoader';
import homeLoader from './loaders/homeLoader';

function App() {
	const browserRouter = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			loader: homeLoader,
			hydrateFallbackElement: <p>Loading...</p>
		},
		{
			path: '/pet/:petId',
			element: <PetDetails />,
			loader: petDetailsLoader,
			hydrateFallbackElement: <p>Loading...</p>
		},
		{
			path: '/welcome',
			element: <Onboarding />
		}
	]);
	return (
		<>
			<RouterProvider router={browserRouter} />
		</>
	);
}

export default App;
