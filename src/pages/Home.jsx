import React from 'react';
import { useLoaderData } from 'react-router';
import OnboardingScreen from '../components/onboarding/OnboardingScreen';
import Header from '../components/navigation/Header';
import NavButton from '../components/navigation/NavButton';

export default function Home() {
	const { pets, user } = useLoaderData();

	return (
		<section>
			<Header />
			<NavButton />
		</section>
	);
}
