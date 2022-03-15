import Head from 'next/head'
import Header from '../common/Header/Header'
import Banner from './Banner'
// import Footer from '../common/Footer/Footer'
import Services from './Services'
import AboutUs from './AboutUs'
import WorkFlow from './Work'
import WhatWeDo from './whatWedo'
import ClientTestimonial from './ClientTestimonial'
import WhyChooseUs from './WhyChooseUs'

const Homepage = () => {
    return(
        <div>
            <Header />
            <Banner />
			<Services />
			<AboutUs />
			<WorkFlow />
			<WhatWeDo />
            <ClientTestimonial />
            <WhyChooseUs />
            {/* <Footer /> */}
        </div>
    )
}
export default Homepage;