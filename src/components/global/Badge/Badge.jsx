import Icon from '../Icon';
import './Badge.sass';

export default function Badge({
	icon,
	text,
	variant = 'default',
	size = 'md',
	className = '',
	iconColor = 'currentColor'
}) {
	// Icon sizes based on badge size
	const iconSizes = {
		sm: 12,
		md: 16,
		lg: 20
	};

	return (
		<div className={`badge badge--${variant} badge--${size} ${className}`}>
			{icon && (
				<span className="badge__icon">
					<Icon name={icon} size={iconSizes[size]} color={iconColor} />
				</span>
			)}
			{text && <span className="badge__text">{text}</span>}
		</div>
	);
}
