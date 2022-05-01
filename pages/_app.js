import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-circular-progressbar/dist/styles.css";
import "../assets/slider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/Layout";
import ProtectedRoutes from "../routes/ProtectedRoutes";
import { Provider } from "react-redux";
import Store from "../redux/Store";
import { NotificationProvider } from "../contexts/NotificationContext";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <Provider store={Store}>
      <ProtectedRoutes router={router}>
        <Layout router={router}>
          <NotificationProvider>
            <Component {...pageProps} />
          </NotificationProvider>
        </Layout>
      </ProtectedRoutes>
    </Provider>
  );
}

export default MyApp;
