import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import Teams from "../../components/Teams/Teams";


const TeamsRoute = () => {
    return (
        <>
            {/* <Header /> */}
            <BreadCrumb spanValue="Our" titleValue="Teams" breadCrumbItem="Home" activeBreadcrumb="Teams" />
            <Teams />
            {/* <Footer /> */}
        </>

    )
}

export default TeamsRoute;