import React, { useState } from 'react';
import Badge from '../../components/global/Badge/Badge';
import Button from '../../components/global/Button/Button';
import Icon from '../../components/global/Icon';
import './NavButton.sass';

export default function NavButton() {
	const [isButtonActive, setIsButtonActive] = useState(false);

	function handleButtonClick() {
		setIsButtonActive(!isButtonActive);
	}
	return (
		<nav className="nav-buttons">
			<Button
				variant="secondary"
				icon={<Icon name="homeOutline" />}
				onClick={handleButtonClick}
				size="small"
			/>
			<Button
				variant="secondary"
				icon={<Icon name="messagesOutline" />}
				onClick={handleButtonClick}
				size="small"
			/>
			<Button
				variant="secondary"
				icon={<Icon name="heartOutline" />}
				onClick={handleButtonClick}
				size="small"
			/>
			<Button
				variant="secondary"
				icon={<Icon name="profileOutline" />}
				onClick={handleButtonClick}
				size="small"
			/>
		</nav>
	);
}
