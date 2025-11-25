import React, { useState } from 'react';
import Header from '../components/navigation/Header';
import NavBar from '../components/navigation/NavBar';
import PetCard from '../components/pet/PetCard';
import CategoryTabs from '../components/tabs/CategoryTabs';
import '../styles/_layout.sass';
import { useLoaderData } from 'react-router';

export default function Favorites() {
	const { pets } = useLoaderData();

	const [favorites] = useState(() => {
		const saved = localStorage.getItem('favorites');
		return saved ? JSON.parse(saved) : {};
	});

	const favoritePets = pets.filter((pet) => favorites[pet.id]);

	return (
		<section className="container">
			<header>
				<Header />
			</header>
			<div>
				<CategoryTabs />
			</div>
			<article>
				{favoritePets.length > 0 ? (
					<PetCard pets={favoritePets} />
				) : (
					<p>No favorites yet.</p>
				)}
			</article>
			<NavBar />
		</section>
	);
}
