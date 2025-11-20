import React from 'react';
import Button from '../global/Button/Button';
import animalBackground from '../../assets/animal.svg';
import '../../styles/_layout.sass';

export default function OnboardingScreen() {
	return (
		<article className="onboarding-container">
			<figure>
				<img
					src={animalBackground}
					alt="animal graphic"
					className="onboarding-container__background-image"
				/>
			</figure>
			<div>
				<h1 className="onboarding-container__title">My Pets</h1>
				<p className="onboarding-container__text">
					Taking care of a pet is my favorite, it helps me to gaimr stress and
					fatigue
				</p>
			</div>

			<Button label="Skip" size="large" fullWidth />
		</article>
	);
}
