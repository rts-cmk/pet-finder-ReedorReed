import React from 'react';
import NavBar from '../components/navigation/NavBar';
import PetCard from '../components/pet/PetCard';
import { useLoaderData } from 'react-router';

export default function List() {
	const { pets } = useLoaderData();


	return (
		<div>
			<ul>
				{pets.map((pet) => {
					<li>{pet}</li>;
				})}
			</ul>

			<NavBar />
		</div>
	);
}
