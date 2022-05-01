import Homepage from "../../components/Homepage/Homepage";
import Header from "../../components/Layout/Header/Header";
import Footer from "../../components/Layout/Footer/Footer";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() =>
  import("../../components/Homepage/Homepage")
);

const HomepageRoute = () => {
  return (
    <>
      <Header />
      <DynamicComponent />
      <Footer />
    </>
  );
};

export default HomepageRoute;
