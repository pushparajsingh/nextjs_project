import BreadCrumb from "../../components/Layout/BreadCrumb/BreadCrumb";
import Career from "../../components/Career/Career";
import { metaTags } from "../../constants";
import { SSRProvider } from "@react-aria/ssr";

const CareerRoute = () => {
  return (
    <SSRProvider>
      {metaTags.CAREER_PAGE}
      <BreadCrumb
        spanValue="Job"
        titleValue="Openings"
        breadCrumbItem="Home"
        activeBreadcrumb="Careers"
      />
      <Career />
    </SSRProvider>
  );
};

export default CareerRoute;
