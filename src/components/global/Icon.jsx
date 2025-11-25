import React from 'react';
import {
	IoHome,
	IoHomeOutline,
	IoChatbubbleEllipses,
	IoChatbubbleOutline,
	IoHeart,
	IoHeartOutline,
	IoPerson,
	IoPersonOutline,
	IoNotifications,
	IoNotificationsOutline,
	IoLocation,
	IoLocationOutline,
	IoChevronDown,
	IoArrowBack,
	IoPaw,
	IoPawOutline,
	IoMale,
	IoFemale
} from 'react-icons/io5';

//Map through icons and give them easier names
const iconMap = {
	home: IoHome,
	homeOutline: IoHomeOutline,
	messages: IoChatbubbleEllipses,
	messagesOutline: IoChatbubbleOutline,
	heart: IoHeart,
	heartOutline: IoHeartOutline,
	profile: IoPerson,
	profileOutline: IoPersonOutline,
	notification: IoNotifications,
	notificationOutline: IoNotificationsOutline,
	location: IoLocation,
	locationOutline: IoLocationOutline,
	chevronDown: IoChevronDown,
	arrowBack: IoArrowBack,
	paw: IoPaw,
	pawOutline: IoPawOutline,
	male: IoMale,
	female: IoFemale
};

export default function Icon({
	name,
	size = 24,
	color = 'currentColor',
	className = ''
}) {
	const IconComponent = iconMap[name];

	if (!IconComponent) {
		console.warn(`Icon "${name}" not found in iconMap`);
		return null;
	}
	return <IconComponent size={size} color={color} className={className} />;
}
