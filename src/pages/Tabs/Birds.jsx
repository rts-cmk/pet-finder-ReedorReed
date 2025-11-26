import React from 'react';
import Header from '../../components/navigation/Header';
import NavButton from '../../components/navigation/NavButton';
import NavBar from '../../components/navigation/NavBar';
import PetCard from '../../components/pet/PetCard';
import CategoryTabs from '../../components/tabs/CategoryTabs';
import '../../styles/_layout.sass';
import { useLoaderData } from 'react-router';

export default function Birds() {
	const { pets } = useLoaderData();

	const birdPets = pets.filter((pet) => pet.category === 'birds');

	return (
		<section className="container">
			<header>
				<Header />
			</header>
			<div>
				<CategoryTabs />
			</div>
			<article>
				<PetCard pets={birdPets} />
			</article>
			;
			<NavBar />
		</section>
	);
}
