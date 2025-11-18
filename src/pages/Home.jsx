import React from 'react';
import petLoader from '../loaders/petLoader';
import { useLoaderData } from 'react-router';

export default function Home() {
	const pets = useLoaderData();

	console.log(pets);

	return <div>Home</div>;
}
