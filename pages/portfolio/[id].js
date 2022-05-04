import BreadCrumb from "../../components/Layout/BreadCrumb/BreadCrumb";
import PortfolioDetails from "../../components/Portfolio/PortfolioDetails";

const PortfolioDetailRoute = () => {
  debugger;
  return (
    <>
      <BreadCrumb
        spanValue="Project"
        titleValue="Details"
        breadCrumbItem="Home"
        activeBreadcrumb="Portfolio"
      />
      <PortfolioDetails />
    </>
  );
};

export default PortfolioDetailRoute;
