import BreadCrumb from "../../components/Layout/BreadCrumb/BreadCrumb";
import Portfolio from "../../components/Portfolio/Portfolio";
import { metaTags } from "../../constants";
import { SSRProvider } from "@react-aria/ssr";

const PortfolioRoute = () => {
  return (
    <SSRProvider>
      {metaTags.PORTFOLIO_PAGE}
      <BreadCrumb
        spanValue="Our"
        titleValue="Portfolio"
        breadCrumbItem="Home"
        activeBreadcrumb="Portfolio"
      />
      <Portfolio />
    </SSRProvider>
  );
};

export default PortfolioRoute;
