import React from 'react';
import './Button.sass';

export default function Button({
	label,
	onClick,
	variant = 'primary',
	size = 'medium',
	icon,
	disabled = false,
	fullWidth = false,
	type = 'button'
}) {
	const classNames = [
		'button',
		`button--${variant}`,
		`button--${size}`,
		fullWidth && 'button--full-width'
	]
		.filter(Boolean)
		.join(' ');

	return (
		<button
			className={classNames}
			onClick={onClick}
			disabled={disabled}
			type={type}>
			{icon && <span className="button__icon">{icon}</span>}
			<span className="button__label">{label}</span>
		</button>
	);
}
