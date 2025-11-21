import React, { useState } from 'react';
import Button from '../../components/global/Button/Button';
import Icon from '../../components/global/Icon';
import './NavButton.sass';

export default function NavButton() {
	// Track the name of the active tab (default to 'home')
	const [activeTab, setActiveTab] = useState('home');

	return (
		<div className="nav-buttons">
			<Button
				variant="secondary"
				// If active, use filled icon, else use outline
				icon={<Icon name={'homeOutline'} />}
				onClick={() => setActiveTab('home')}
				size="small"
				active={activeTab === 'home'}
			/>
			<Button
				variant="secondary"
				icon={<Icon name={'messagesOutline'} />}
				onClick={() => setActiveTab('messages')}
				size="small"
				active={activeTab === 'messages'}
			/>
			<Button
				variant="secondary"
				icon={<Icon name={'heartOutline'} />}
				onClick={() => setActiveTab('heart')}
				size="small"
				active={activeTab === 'heart'}
			/>
			<Button
				variant="secondary"
				icon={<Icon name={'profileOutline'} />}
				onClick={() => setActiveTab('profile')}
				size="small"
				active={activeTab === 'profile'}
			/>
		</div>
	);
}
