import React from 'react';
import { useLoaderData } from 'react-router';
import Button from '../components/global/Button/Button';
import '../styles/_layout.sass';
import Badge from '../components/global/Badge/Badge';

export default function PetDetails() {
	const petDetails = useLoaderData();

	console.log(petDetails);

	return (
		<section>
			<figure>
				<img src={petDetails.image} alt={petDetails.breed} />
			</figure>
			<article>
				<h1>{petDetails.breed}</h1>
				<Badge
					icon={'location'}
					text={petDetails.location}
					variant={'location'}
					size={'md'}
					iconColor="#5533EA"
				/>
				<div>
					<Badge
						icon={'paw'}
						text={petDetails.breed}
						variant={'icon'}
						size={'md'}
						iconColor="#F4B207"
					/>
					<Badge
						icon={petDetails.gender}
						text={petDetails.gender}
						variant={'icon'}
						size={'md'}
						iconColor="#FF8893"
					/>
				</div>
				<p>{petDetails.long_description}</p>
			</article>
			<Button label="Back" size="large" fullWidth />
		</section>
	);
}
