interface Slogan {
	text: string;
	containerStyle: string;
	textStyle: string;
}

const Slogan: React.FC<Slogan> = (props) => {
	return (
		<section className={props.containerStyle}>
			<h1 className={props.textStyle}>{props.text}</h1>
		</section>
	);
};

export default Slogan;
