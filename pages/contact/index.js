import BreadCrumb from "../../components/Layout/BreadCrumb/BreadCrumb";
import Contact from "../../components/Contact/Contact";
import { metaTags } from "../../constants";
import { SSRProvider } from "@react-aria/ssr";

const ContactRoute = () => {
  return (
    <SSRProvider>
      {metaTags.CONTACT_US_PAGE}
      <BreadCrumb
        spanValue="Contact"
        titleValue="Us"
        breadCrumbItem="Home"
        activeBreadcrumb="Contact us"
      />
      <Contact />
    </SSRProvider>
  );
};

export default ContactRoute;
