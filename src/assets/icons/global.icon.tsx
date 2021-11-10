import React from 'react';
import Icons from './icon-sprite.svg';
interface IconProps {
	icon: string;
	w?: string;
	h?: string;
	color?: string;
	className?: string;
}
export const Icon: React.FC<IconProps> = ({
	icon,
	w,
	h,
	color,
	className,
}: IconProps) => {
	return (
		<svg
			width={w ? w : '16px'}
			height={h ? h : '16px'}
			fill={color ? color : '#000'}
			className={className || ''}
		>
			<use href={Icons + `#icon-${icon}`} />
		</svg>
	);
};
