import React from 'react';
import Button from '../../components/global/Button/Button';
import Icon from '../../components/global/Icon';
import './NavButton.sass';
import { NavLink } from 'react-router';

export default function NavButton() {
	return (
		<div className="nav-buttons">
			<NavLink to="/" end>
				{({ isActive }) => (
					<Button
						variant="secondary"
						icon={<Icon name={'homeOutline'} />}
						size="small"
						active={isActive}
					/>
				)}
			</NavLink>

			<NavLink to="/admin" end>
				{({ isActive }) => (
					<Button
						variant="secondary"
						icon={<Icon name={'messagesOutline'} />}
						size="small"
						active={isActive}
					/>
				)}
			</NavLink>

			<NavLink to="/favorites" end>
				{({ isActive }) => (
					<Button
						variant="secondary"
						icon={<Icon name={'heartOutline'} />}
						size="small"
						active={isActive}
					/>
				)}
			</NavLink>

			<NavLink to="/list" end>
				{({ isActive }) => (
					<Button
						variant="secondary"
						icon={<Icon name={'profileOutline'} />}
						size="small"
						active={isActive}
					/>
				)}
			</NavLink>
		</div>
	);
}
