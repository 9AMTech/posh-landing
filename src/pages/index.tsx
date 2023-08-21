import Layout from "../components/Layout/Layout";
import CenterPiece from "../components/Centerpiece";
import Sale from "../assets/images/stock images/new-sale.jpg";
import Fit from "../assets/images/stock images/landing-in-fit.jpg";
import Newsletter from "../components/Newsletter";
import Banner from "../components/Banner";
import BannerImage from "../assets/images/stock images/banner.jpg";

const IndexPage = () => {
  return (
    <Layout>
      <section className="flex flex-col max-w-3xl gap-y-16 mx-auto my-20">
        <Banner
          image={BannerImage}
          altText="Interior clothing store image. Classy but relaxed theme"
          styles="mx-auto w-full"
        />

        <CenterPiece
          content={<h2>The best part of waking up is landing in your fit !</h2>}
          styles="md:flex-row-reverse"
          image={
            <img
              src={Fit}
              alt="Friends laying down on grass in a circle, heads touching, happy times."
            />
          }
        />
        <CenterPiece
          content={<h2>Get your early bird special ! 20% off of all bags !</h2>}
          image={
            <img
              src={Sale}
              alt="Lady holding a bag with a sale tag attached."
            />
          }
        />

        <Newsletter />
      </section>
    </Layout>
  );
};

export default IndexPage;
