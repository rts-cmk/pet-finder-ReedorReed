import React from 'react';
import Header from '../components/navigation/Header';
import NavButton from '../components/navigation/NavButton';
import NavBar from '../components/navigation/NavBar';
import PetCard from '../components/pet/PetCard';
import CategoryTabs from '../components/tabs/CategoryTabs';
import '../styles/_layout.sass';
import { useLoaderData } from 'react-router';

export default function Cats() {
	const { pets } = useLoaderData();

	const catPets = pets.filter((pet) => pet.category === 'cats');

	return (
		<section className="container">
			<header>
				<Header />
			</header>
			<div>
				<CategoryTabs />
			</div>
			<article>
				<PetCard pets={catPets} />
			</article>
			;
			<NavBar />
		</section>
	);
}
