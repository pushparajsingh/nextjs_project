import BreadCrumb from "../../components/Layout/BreadCrumb/BreadCrumb";
import Career from "../../components/Career/Career";

const CareerRoute = () => {
  return (
    <>
      <BreadCrumb
        spanValue="Job"
        titleValue="Openings"
        breadCrumbItem="Home"
        activeBreadcrumb="Careers"
      />
      <Career />
    </>
  );
};

export default CareerRoute;
