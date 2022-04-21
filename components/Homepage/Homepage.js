import Banner from './Banner'
import Services from './Services'
import AboutUs from './AboutUs'
import WorkFlow from './Work'
import WhatWeDo from './whatWedo'
import ClientTestimonial from './ClientTestimonial'
import WhyChooseUs from './WhyChooseUs'
import Achievements from './Awards'
const Homepage = () => {
    return(
        <div className="content">
            <Banner />
			<Services />
			<AboutUs />
			<WorkFlow />
			<WhatWeDo />
            <ClientTestimonial />
            <WhyChooseUs />
            <Achievements />
        </div>
    )
}
export default Homepage;