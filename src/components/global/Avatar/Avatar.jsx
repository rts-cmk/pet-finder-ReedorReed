import React from 'react';
import Icon from '../Icon';
import './Avatar.sass';

export default function Avatar({
	src,
	alt = 'Profile picture',
	size = 'md',
	className = ''
}) {
	return (
		<div className={`avatar avatar--${size} ${className}`}>
			<img src={src} alt={alt} className="avatar__image" />
		</div>
	);
}
