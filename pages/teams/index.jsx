import BreadCrumb from "../../components/Layout/BreadCrumb/BreadCrumb";
import Teams from "../../components/Teams/Teams";

const TeamsRoute = () => {
  return (
    <>
      <BreadCrumb
        spanValue="Our"
        titleValue="Teams"
        breadCrumbItem="Home"
        activeBreadcrumb="Teams"
      />
      <Teams />
    </>
  );
};

export default TeamsRoute;
