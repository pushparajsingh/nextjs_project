import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import PortfolioDetails from "../../components/Portfolio/PortfolioDetails";


const PortfolioDetailRoute = () => {
    return (
        <>
            {/* <Header /> */}
            <BreadCrumb spanValue="Project" titleValue="Details" breadCrumbItem="Home" activeBreadcrumb="Portfolio" />
            <PortfolioDetails />
            {/* <Footer /> */}
        </>

    )
}

export default PortfolioDetailRoute;