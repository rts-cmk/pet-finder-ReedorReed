import './styles/main.sass';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Home from './pages/Home';
import PetDetails from './pages/PetDetails';
import Onboarding from './pages/Onboarding';
import petDetailsLoader from './loaders/petDetailsLoader';
import AdminNew from './pages/Admin/AdminNew';
import homeLoader from './loaders/homeLoader';
import Favorites from './pages/Favorites';
import Birds from './pages/Tabs/Birds';
import Cats from './pages/Tabs/Cats';
import Dogs from './pages/Tabs/Dogs';
import Other from './pages/Tabs/Other';
import AdminEdit from './pages/Admin/AdminEdit';
import AdminDelete from './pages/Admin/AdminDelete';

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
			children: [
				{
					path: '/admin/new',
					element: <AdminNew />
				},
				{
					path: '/admin/edit/:petId',
					element: <AdminEdit />,
					loader: petDetailsLoader,
					hydrateFallbackElement: <p>Loading...</p>
				},
				{
					path: '/admin/delete/:petId',
					element: <AdminDelete />,
					loader: petDetailsLoader,
					hydrateFallbackElement: <p>Loading...</p>
				}
			]
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
