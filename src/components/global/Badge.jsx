import React from 'react';
import Icon from './Icon';
import '../../styles/_variables.sass';

export default function Badge({
	icon,
	text,
	variant = 'default',
	size = 'md',
	className = ''
}) {
	const variants = {
		default: 'bg-[#f5f5fa] text-[#7878ab]',
		primary: 'bg-[#57419d] text-[#fff]',
		active: 'bg-[#f5f5f9] text-[#5533ea]'
	};

	const sizes = {
		sm: 'text-xs px-2 py-1 gap-1',
		md: 'text-sm px-3 py-1.5 gap-1.5',
		lg: 'text-base px-4 py-2 gap-2'
	};

	const iconSizes = {
		sm: 12,
		md: 16,
		lg: 20
	};

	return (
		<div
			className={`inline-flex items-center rounded-full font-medium
        ${variants[variant]}
        ${sizes[size]}
        ${className}
    `}>
			{icon && <Icon name={icon} size={iconSizes[size]} />}
			{text && <span>{text}</span>}
		</div>
	);
}
