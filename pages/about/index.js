import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import About from "../../components/About/About";


const AboutRoute = () => {
    return (
        <>
            <Header />
            <BreadCrumb spanValue="About" titleValue="Us" breadCrumbItem="Home" activeBreadcrumb="About us" />
            <About />
            <Footer />
        </>

    )
}

export default AboutRoute;