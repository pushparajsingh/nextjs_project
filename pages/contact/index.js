import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import Contact from "../../components/Contact/Contact";


const ContactRoute = () => {
    return (
        <>
            {/* <Header /> */}
            <BreadCrumb spanValue="Contact" titleValue="Us" breadCrumbItem="Home" activeBreadcrumb="Contact us" />
            <Contact />
            {/* <Footer /> */}
        </>

    )
}

export default ContactRoute;