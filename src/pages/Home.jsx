import React from 'react';
import OnboardingScreen from '../components/onboarding/OnboardingScreen';
import Header from '../components/navigation/Header';
import NavButton from '../components/navigation/NavButton';
import NavBar from '../components/navigation/NavBar';
import PetCard from '../components/pet/PetCard';
import CategoryTabs from '../components/tabs/CategoryTabs';
import '../styles/_layout.sass';

export default function Home() {
	return (
		<section className="container">
			<header>
				<Header />
			</header>
			<div>
				<CategoryTabs />
			</div>
			<article>
				<PetCard />
			</article>
			<NavBar />
		</section>
	);
}
