interface BannerProps {
	image: string,
	altText: string,
	styles: string,
}

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <section>
      <img
        src={props.image}
        alt={props.altText}
        className={props.styles}
      />
    </section>
  );
};

export default Banner;
