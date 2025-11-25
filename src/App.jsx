import './styles/main.sass';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './pages/Home';
import PetDetails from './pages/PetDetails';
import Onboarding from './pages/Onboarding';
import petDetailsLoader from './loaders/petDetailsLoader';
import Admin from './pages/Admin';
import homeLoader from './loaders/homeLoader';
import Favorites from './pages/Favorites';
import Birds from './pages/Birds';
import Cats from './pages/Cats';
import Dogs from './pages/Dogs';
import Other from './pages/Other';
import List from './pages/List';

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
		},
		{
			path: '/admin',
			element: <Admin />
		},
		{
			path: '/favorites',
			element: <Favorites />,
			loader: homeLoader,
			hydrateFallbackElement: <p>Loading...</p>
		},
		{
			path: '/birds',
			element: <Birds />,
			loader: homeLoader,
			hydrateFallbackElement: <p>Loading...</p>
		},
		{
			path: '/cats',
			element: <Cats />,
			loader: homeLoader,
			hydrateFallbackElement: <p>Loading...</p>
		},
		{
			path: '/dogs',
			element: <Dogs />,
			loader: homeLoader,
			hydrateFallbackElement: <p>Loading...</p>
		},
		{
			path: '/list',
			element: <List />,
			loader: homeLoader,
			hydrateFallbackElement: <p>Loading...</p>
		},
		{
			path: '/other',
			element: <Other />,
			loader: homeLoader,
			hydrateFallbackElement: <p>Loading...</p>
		}
	]);
	return (
		<>
			<RouterProvider router={browserRouter} />
		</>
	);
}

export default App;
