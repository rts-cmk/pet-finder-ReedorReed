import './styles/main.sass';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './pages/Home';
import PetDetails from './pages/PetDetails';
import Onboarding from './pages/Onboarding';
import petLoader from './loaders/petLoader';

function App() {
	const browserRouter = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			loader: petLoader,
			hydrateFallbackElement: <p>Loading...</p>
		},
		{
			path: '/pet/:id',
			element: <PetDetails />
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
