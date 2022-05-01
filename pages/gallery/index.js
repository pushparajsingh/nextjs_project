import BreadCrumb from "../../components/Layout/BreadCrumb/BreadCrumb";
import Gallery from "../../components/Gallery/Gallery";
import { metaTags } from "../../constants";
import { SSRProvider } from "@react-aria/ssr";
const GalleryRoute = () => {
  return (
    <SSRProvider>
      {metaTags.GALLERY_PAGE}
      <BreadCrumb
        spanValue="Our"
        titleValue="Gallery"
        breadCrumbItem="Home"
        activeBreadcrumb="Gallery"
      />
      <Gallery />
    </SSRProvider>
  );
};

export default GalleryRoute;
