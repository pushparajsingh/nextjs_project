import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import About from "../../components/About/About";


const AboutRoute = () => {
    return (
        <>
            <BreadCrumb spanValue="About" titleValue="Us" breadCrumbItem="Home" activeBreadcrumb="About us" />
            <About />
        </>

    )
}

export default AboutRoute;