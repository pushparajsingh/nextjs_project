import Head from 'next/head'
import Header from '../common/Header/Header'
// import Footer from '../common/Footer/Footer'
import Services from './Services'
import AboutUs from './AboutUs'
import WorkFlow from './Work'
import WhatWeDo from './whatWedo'

const Homepage = () => {
    return(
        <div>
            <Header />
			<Services />
			<AboutUs />
			<WorkFlow />
			<WhatWeDo />
            {/* <Footer /> */}
        </div>
    )
}
export default Homepage;