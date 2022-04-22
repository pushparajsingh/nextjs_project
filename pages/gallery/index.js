import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import Gallery from "../../components/Gallery/Gallery";


const GalleryRoute = () => {
    return (
        <>
            {/* <Header /> */}
            <BreadCrumb spanValue="Our" titleValue="Gallery" breadCrumbItem="Home" activeBreadcrumb="Gallery" />
            <Gallery />
            {/* <Footer /> */}
        </>

    )
}

export default GalleryRoute;