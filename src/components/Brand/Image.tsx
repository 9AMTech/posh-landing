import plLogo from '../../assets/images/PL-Plane-Logo-transparent.png';

interface LogoProps {
	styles: string,
}

const Logo: React.FC <LogoProps> = (props) => {	
	return(
		<img src={plLogo} alt="Posh Landing Icon Logo - A plane landing within a circle border" 
		className={props.styles}
		/>
	)
}

export default Logo;