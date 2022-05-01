import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import Layout from "../components/Layout";
import ProtectedRoutes from "../routes/ProtectedRoutes";
import { Provider } from "react-redux";
import Store from "../redux/Store";
import { NotificationProvider } from "../contexts/NotificationContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-circular-progressbar/dist/styles.css";
import "../assets/slider.css";
import "aos/dist/aos.css";
import yuvasoftLogo from "../assets/images/yuvasoft-logo.png";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:image" content={yuvasoftLogo} />
        <meta property="og:image" content={yuvasoftLogo} />
        <meta property="image" content={yuvasoftLogo} />
      </Head>
      <Provider store={Store}>
        <ProtectedRoutes router={router}>
          <Layout router={router}>
            <NotificationProvider>
              <Component {...pageProps} />
            </NotificationProvider>
          </Layout>
        </ProtectedRoutes>
      </Provider>
    </div>
  );
}

export default MyApp;
