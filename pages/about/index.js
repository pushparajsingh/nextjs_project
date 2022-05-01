import BreadCrumb from "../../components/Layout/BreadCrumb/BreadCrumb";
import About from "../../components/About/About";
import { metaTags } from "../../constants";
import { SSRProvider } from "@react-aria/ssr";

const AboutRoute = () => {
  return (
    <SSRProvider>
      {metaTags.ABOUT_US_PAGE}
      <BreadCrumb
        spanValue="About"
        titleValue="Us"
        breadCrumbItem="Home"
        activeBreadcrumb="About us"
      />
      <About />
    </SSRProvider>
  );
};

export default AboutRoute;
