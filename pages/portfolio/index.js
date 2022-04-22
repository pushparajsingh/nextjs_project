import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import BreadCrumb from "../../components/common/BreadCrumb/BreadCrumb";
import Portfolio from "../../components/Portfolio/Portfolio";


const PortfolioRoute = () => {
    return (
        <>
            {/* <Header /> */}
            <BreadCrumb spanValue="Our" titleValue="Portfolio" breadCrumbItem="Home" activeBreadcrumb="Portfolio" />
            <Portfolio />
            {/* <Footer /> */}
        </>

    )
}

export default PortfolioRoute;