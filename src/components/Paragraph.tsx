interface Paragraph {
  text: string;
  containerStyle?: string;
  textStyle?: string;
}

const Paragraph: React.FC<Paragraph> = (props) => {
  return (
    <section className={props.containerStyle}>
      <h1 className={props.textStyle}>{props.text}</h1>
    </section>
  );
};

export default Paragraph;
