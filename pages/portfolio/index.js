import BreadCrumb from "../../components/Layout/BreadCrumb/BreadCrumb";
import Portfolio from "../../components/Portfolio/Portfolio";

const PortfolioRoute = () => {
  return (
    <>
      <BreadCrumb
        spanValue="Our"
        titleValue="Portfolio"
        breadCrumbItem="Home"
        activeBreadcrumb="Portfolio"
      />
      <Portfolio />
    </>
  );
};

export default PortfolioRoute;
