import React from 'react';
import Button from '../global/Button/Button';
import './CategoryTabs.sass';
import { NavLink } from 'react-router';

export default function CategoryTabs() {
	return (
		<div className="tabs-container">
			<NavLink to="/cats" end>
				{({ isActive }) => (
					<Button
						label="Cats"
						variant="tertiary"
						size="small"
						active={isActive}
					/>
				)}
			</NavLink>

			<NavLink to="/dogs" end>
				{({ isActive }) => (
					<Button
						label="Dogs"
						variant="tertiary"
						size="small"
						active={isActive}
					/>
				)}
			</NavLink>

			<NavLink to="/birds" end>
				{({ isActive }) => (
					<Button
						label="Birds"
						variant="tertiary"
						size="small"
						active={isActive}
					/>
				)}
			</NavLink>

			<NavLink to="/other" end>
				{({ isActive }) => (
					<Button
						label="Other"
						variant="tertiary"
						size="small"
						active={isActive}
					/>
				)}
			</NavLink>
		</div>
	);
}
