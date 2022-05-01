import BreadCrumb from "../../components/Layout/BreadCrumb/BreadCrumb";
import Services from "../../components/Services/Services";
import { metaTags } from "../../constants";
import { SSRProvider } from "@react-aria/ssr";

const ServicesRoute = () => {
  return (
    <SSRProvider>
      {metaTags.SERVICE_PAGE}
      <BreadCrumb
        spanValue="Our"
        titleValue="Services"
        breadCrumbItem="Home"
        activeBreadcrumb="Services"
      />
      <Services />
    </SSRProvider>
  );
};

export default ServicesRoute;
