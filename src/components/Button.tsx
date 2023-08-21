import * as React from 'react';

interface ButtonProps {
	styles?: string,
	content?: any,
	onButtonClick?: () => void,
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button className={props.styles} onClick={props.onButtonClick}>
			{props.content}
		</button>
	)
}

export default Button;