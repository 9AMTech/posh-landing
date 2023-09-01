import Layout from "../components/Layout/Layout";
import Paragraph from "../components/Paragraph";
import Logo from "../components/Brand/Image";
import Friends from "../assets/images/stock images/group-of-friends.jpg";
import Banner from "../components/Banner";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <section className="flex flex-col text-center w-10/12 max-w-2xl mx-auto my-28 gap-y-16">
        <h1 className="text-3xl">OUR MISSION STATEMENT</h1>

        <Banner
          image={Friends}
          altText="Group of friends sitting down on the beach hugging and watching the sunset together."
          styles="w-full max-h-[16rem] max-w-[23rem] mx-auto
					
					"
        />

        <Paragraph
          text="At PoshLanding, our mission is to empower individuals to express their unique style and confidence through fashion. We believe that clothing is more than just a means of covering the body; it is a form of self-expression and a reflection of one's personality. 
					We strive to curate a collection of high-quality, trend-setting garments that not only make our customers look good but also feel good. 
					"
        />

        <Paragraph
          text="Our commitment to exceptional craftsmanship, attention to detail, and sustainable practices ensures that our customers can embrace their individuality with pride, while leaving a positive impact on the planet. 
					Ultimately, we aim to be the go-to destination for fashion enthusiasts seeking stylish and ethically-made clothing that allows them to stand out from the crowd."
        />

        <Logo 
				styles='h-36 w-36 self-center'
				/>
      </section>
    </Layout>
  );
};

export default AboutPage;
