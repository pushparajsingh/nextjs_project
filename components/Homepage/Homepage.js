import Head from 'next/head'
import Header from '../common/Header/Header'
import Footer from '../common/Footer/Footer'
import Services from './Services'
import AboutUs from './AboutUs'

const ServiceData = []
const Homepage = () => {
    return(
        <div>
            <Header />
			<Services />
			<AboutUs />
            <Footer />
        </div>
    )
}
export default Homepage;