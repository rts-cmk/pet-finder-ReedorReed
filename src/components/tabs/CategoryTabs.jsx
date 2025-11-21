import React from 'react';
import Button from '../global/Button/Button';
import './CategoryTabs.sass';

export default function CategoryTabs() {
	return (
		<div className="tabs-container">
			<Button label="Cats" variant="tertiary" size="small" />
			<Button label="Dogs" variant="tertiary" size="small" />
			<Button label="Birds" variant="tertiary" size="small" />
			<Button label="Other" variant="tertiary" size="small" />
		</div>
	);
}
