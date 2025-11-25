import petLoader from './petLoader';
import userLoader from './userLoader';

export default async function homeLoader(args) {
	const [pets, user] = await Promise.all([petLoader(args), userLoader(args)]);
	return { pets, user };
}
