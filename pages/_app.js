import { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import '../assets/slider.css'
import AOS from "aos"
import 'aos/dist/aos.css'
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Header />
      <div className="content" id="contentBox">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
