import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import Services from "../../components/Services/Services";


const ServicesRoute = () => {
    return (
        <>
            <BreadCrumb spanValue="Our" titleValue="Services" breadCrumbItem="Home" activeBreadcrumb="Services" />
            <Services />
        </>

    )
}

export default ServicesRoute;