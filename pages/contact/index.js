import BreadCrumb from "../../components/Layout/BreadCrumb/BreadCrumb";
import Contact from "../../components/Contact/Contact";

const ContactRoute = () => {
  return (
    <>
      <BreadCrumb
        spanValue="Contact"
        titleValue="Us"
        breadCrumbItem="Home"
        activeBreadcrumb="Contact us"
      />
      <Contact />
    </>
  );
};

export default ContactRoute;
