interface CenterPieceProps {
  styles?: string;
  image: any;
  content: any;
}

const CenterPiece: React.FC<CenterPieceProps> = (props) => {
  return (
    <section
      className={
        `
		flex flex-col gap-y-5 items-center bg-secondary-button p-4 
		[&>section]:max-h-full [&>section]:text-center [&>section]:text-lg [&>section]:basis-1/2
		[&>section>img]:w-full [&>section>img]:h-4/5 [&>section>img]:mx-auto
		md:flex-row
		md:[&>section]:text-2xl ` + props.styles
      }
    >
      <section>
        {props.image}
      </section>
      <section>
        {props.content}
      </section>
    </section>
  );
};

export default CenterPiece;
