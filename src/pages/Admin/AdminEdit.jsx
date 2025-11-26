import React from 'react';
import NavBar from '../../components/navigation/NavBar';
import Button from '../../components/global/Button/Button';
import './AdminNew.sass';
import { useLoaderData, useNavigate, useParams } from 'react-router';

export default function AdminEdit() {
	const { petId } = useParams();
	const navigate = useNavigate();
	const pet = useLoaderData();

	const submitHandler = (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);

		// const data = Object.fromEntries(formData);

		const data = {
			category: formData.get('category'),
			image: formData.get('imageUrl'),
			breed: formData.get('breed'),
			gender: formData.get('gender'),
			location: formData.get('location'),
			short_description: formData.get('shortDescription'),
			long_description: formData.get('longDescription')
		};

		console.log(data);

		fetch(`http://localhost:4000/pets/${petId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((response) => {
			console.log('API response', response);
			navigate('/');
		});
	};

	return (
		<div className="admin">
			<main className="admin__main">
				<h1>Edit page</h1>
				<form className="admin__form" method="post" onSubmit={submitHandler}>
					<label className="admin__label">
						<span>Category</span>
						<select
							name="category"
							className="admin__input"
							defaultValue={pet.category}>
							<option value="dogs">Dogs</option>
							<option value="cats">Cats</option>
							<option value="birds">Birds</option>
							<option value="other">Other</option>
						</select>
					</label>

					<label className="admin__label">
						<span>Breed</span>
						<input
							name="breed"
							type="text"
							className="admin__input"
							placeholder="Enter breed"
							defaultValue={pet.breed}
						/>
					</label>
					<label className="admin__label">
						<span>
							Image <br /> URL
						</span>
						<input
							name="imageUrl"
							type="text"
							className="admin__input"
							placeholder="Enter image URL"
							defaultValue={pet.image}
						/>
					</label>
					<label className="admin__label">
						<span>Gender</span>
						<select
							name="gender"
							className="admin__input"
							defaultValue={pet.gender}>
							<option value="female">Female</option>
							<option value="male">Male</option>
						</select>
					</label>
					<label className="admin__label">
						<span>Location</span>
						<input
							name="location"
							type="text"
							className="admin__input"
							placeholder="Enter location"
							defaultValue={pet.location}
						/>
					</label>
					<label className="admin__label">
						<span>Short description</span>
						<input
							name="shortDescription"
							type="text"
							className="admin__input"
							placeholder="Enter short description"
							defaultValue={pet.short_description}
						/>
					</label>
					<label className="admin__label">
						<span>Long description</span>
						<input
							name="longDescription"
							type="text"
							className="admin__input"
							placeholder="Enter long description"
							defaultValue={pet.long_description}
						/>
					</label>
					<Button
						label="Save pet changes"
						type="submit"
						fullWidth
						size="large"
					/>
				</form>
			</main>
			<NavBar />
		</div>
	);
}
