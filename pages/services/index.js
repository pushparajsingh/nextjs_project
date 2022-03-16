import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import Services from "../../components/Services/Services";


const ServicesRoute = () => {
    return (
        <>
            <Header />
            <BreadCrumb spanValue="Our" titleValue="Services" breadCrumbItem="Home" activeBreadcrumb="Services" />
            <Services />
            <Footer />
        </>

    )
}

export default ServicesRoute;