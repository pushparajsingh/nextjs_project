import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import Career from "../../components/Career/Career";


const CareerRoute = () => {
    return (
        <>
            <Header />
            <BreadCrumb spanValue="Job" titleValue="Openings" breadCrumbItem="Home" activeBreadcrumb="Careers" />
            <Career />
            <Footer />
        </>

    )
}

export default CareerRoute;