import BreadCrumb from "../../components/Layout/BreadCrumb/BreadCrumb";
import Teams from "../../components/Teams/Teams";
import { metaTags } from "../../constants";
import { SSRProvider } from "@react-aria/ssr";

const TeamsRoute = () => {
  return (
    <SSRProvider>
      {metaTags.TEAM_PAGE}
      <BreadCrumb
        spanValue="Our"
        titleValue="Teams"
        breadCrumbItem="Home"
        activeBreadcrumb="Teams"
      />
      <Teams />
    </SSRProvider>
  );
};

export default TeamsRoute;
