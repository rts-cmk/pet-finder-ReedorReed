import React, { useState } from 'react';
import Avatar from '../../components/global/Avatar/Avatar';
import Badge from '../../components/global/Badge/Badge';
import Button from '../../components/global/Button/Button';
import Icon from '../../components/global/Icon';
import { useLoaderData } from 'react-router';
import './Header.sass';

export default function Header() {
	const { user } = useLoaderData();
	const [isNotificationActive, setIsNotificationActive] = useState(false);

	function handleNotificationClick() {
		setIsNotificationActive(!isNotificationActive);
	}

	return (
		<header className="header">
			<div className="header__avatar-wrapper">
				<Avatar src={user.image} />
				<Badge
					icon={'location'}
					text={user.location}
					variant={'location'}
					size={'md'}
					iconColor="#5533EA"
				/>
				<Icon name="chevronDown" size={12} className="chevron" />
			</div>
			<Button
				variant="secondary"
				icon={
					<Icon
						name={isNotificationActive ? 'notification' : 'notificationOutline'}
					/>
				}
				onClick={handleNotificationClick}
				size="small"
			/>
		</header>
	);
}
