export default async function petDetailsLoader({ params }) {
	const id = params.petId;

	try {
		const response = await fetch(`http://localhost:4000/pets/${id}`);

		if (!response.ok) {
			throw new Error(
				`There is an error when fetching! status: ${response.status}`
			);
		}

		const result = await response.json();

		return result;
	} catch (error) {
		console.error('There is an error', error);
		throw error;
	}
}
