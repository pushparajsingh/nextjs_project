import Homepage from "../../components/Homepage/Homepage";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
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
