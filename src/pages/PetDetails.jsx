import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Button from '../components/global/Button/Button';
import '../styles/PetDetails.sass';
import Badge from '../components/global/Badge/Badge';

export default function PetDetails() {
	const petDetails = useLoaderData();
	const navigate = useNavigate();

	function handleBackClick() {
		navigate(-1);
	}

	return (
		<section className="pet-details">
			<figure className="pet-details__figure">
				<img src={petDetails.image} alt={petDetails.breed} />
			</figure>

			<article className="pet-details__content">
				<div className="pet-details__header">
					<h1>{petDetails.breed}</h1>
					<Badge
						icon={'location'}
						text={petDetails.location}
						variant={'default'}
						size={'sm'}
						className="pet-details__location"
						iconColor="#5533EA"
					/>
				</div>

				<div className="pet-details__badges">
					<Badge
						icon={'paw'}
						text={petDetails.breed}
						variant={'detail'}
						size={'lg'}
						iconColor="#F4B207"
					/>
					<Badge
						icon={petDetails.gender === 'Female' ? 'female' : 'male'}
						text={petDetails.gender}
						variant={'detail'}
						size={'lg'}
						iconColor="#FF8893"
					/>
				</div>

				<p className="pet-details__description">
					{petDetails.long_description}
				</p>

				<Button label="Back" size="large" fullWidth onClick={handleBackClick} />
			</article>
		</section>
	);
}
