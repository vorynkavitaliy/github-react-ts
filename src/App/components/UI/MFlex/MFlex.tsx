import React, { ReactNode } from 'react';
import s from './flex.module.sass';
interface FlexProps {
	wrap?: boolean;
	aCenter?: boolean;
	aStart?: boolean;
	aEnd?: boolean;
	jCenter?: boolean;
	jStart?: boolean;
	jEnd?: boolean;
	jAround?: boolean;
	jBetween?: boolean;
	row?: boolean;
	column?: boolean;
	rowReverse?: boolean;
	columnReverse?: boolean;
	w?: string;
	children: ReactNode;
    className?: string
}

export const MFlex: React.FC<FlexProps> = (props: FlexProps) => {
	const styles = {
		maxWidth: props.w ? props.w : '100%',
	};
	const classes = [
        props.className,
		s.flex,
		props.wrap ? s.wrap : '',
		props.aCenter ? s['align-center'] : '',
		props.aEnd ? s['align-end'] : '',
		props.aStart ? s['align-start'] : '',
		props.column ? s.column : '',
		props.columnReverse ? s['column-reverse'] : '',
		props.jCenter ? s['justify-center'] : '',
		props.jStart ? s['justify-start'] : '',
		props.jEnd ? s['justify-center'] : '',
		props.jAround ? s['justify-around'] : '',
		props.jBetween ? s['justify-between'] : '',
		props.row ? s.row : '',
		props.rowReverse ? s['row-reverse'] : '',
	];
	return (
		<div className={classes.join(' ')} style={styles}>
			{props.children}
		</div>
	);
};
