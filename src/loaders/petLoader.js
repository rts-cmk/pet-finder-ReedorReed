export default async function petLoader({ params, request }) {
	try {
		// Extract any params you need, or use the request URL
		const url = new URL(request.url);
		const searchParams = url.searchParams;

		// For now, just fetch all pets from root
		const response = await fetch(`http://localhost:4000/dogs`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		console.log(result);
		return result;
	} catch (error) {
		console.error('Error', error);
		throw error;
	}
}
