import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import Gallery from "../../components/Gallery/Gallery";


const GalleryRoute = () => {
    return (
        <>
            <BreadCrumb spanValue="Our" titleValue="Gallery" breadCrumbItem="Home" activeBreadcrumb="Gallery" />
            <Gallery />
        </>

    )
}

export default GalleryRoute;