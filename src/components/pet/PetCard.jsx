import React, { useEffect, useState } from 'react';
import Button from '../global/Button/Button';
import Icon from '../global/Icon';
import Badge from '../global/Badge/Badge';
import { useLoaderData, useNavigate } from 'react-router';
import './PetCard.sass';

export default function PetCard() {
	const { pets } = useLoaderData();
	const navigate = useNavigate();


	const [favorites, setFavorites] = useState(() => {
		const saved = localStorage.getItem('favorites');
		return saved ? JSON.parse(saved) : {};
	});

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	function handleFavoriteClick(e, petId) {
		e.stopPropagation(); 
		setFavorites((prev) => ({
			...prev,
			[petId]: !prev[petId]
		}));
	}

	function handleCardClick(petId) {
		navigate(`/pet/${petId}`);
	}

	return (
		<>
			{pets.map((pet) => (
				<div
					key={pet.id}
					className="pet-card"
					onClick={() => handleCardClick(pet.id)}>
					<figure className="pet-card__figure">
						<img src={pet.image} alt={pet.breed} className="pet-card__image" />
					</figure>
					<article className="pet-card__info">
						<h2 className="pet-card__title">{pet.breed}</h2>
						<Badge
							icon="location"
							text={pet.location}
							variant="location"
							size="sm"
							iconColor="#5533EA"
						/>
						<p className="pet-card__description">{pet.short_description}</p>
					</article>
					<Button
						variant="secondary"
						icon={
							<Icon
								name={favorites[pet.id] ? 'heart' : 'heartOutline'}
								color={favorites[pet.id] ? '#FF6B6B' : '#bdbdbd'}
							/>
						}
						onClick={(e) => handleFavoriteClick(e, pet.id)}
						size="small"
					/>
				</div>
			))}
		</>
	);
}
