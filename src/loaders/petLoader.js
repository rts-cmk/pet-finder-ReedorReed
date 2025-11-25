export default async function petLoader() {
	try {
		const response = await fetch(`http://localhost:4000/pets`);

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
