import React from 'react';
import NavButton from './NavButton';
import './NavBar.sass';

export default function NavBar() {
	return (
		<nav className="nav-bar">
			<ul className="nav-bar__ul">
				<li className="nav-bar__li">
					<NavButton />
				</li>
			</ul>
		</nav>
	);
}
