import { useSelector } from "react-redux";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AdminLayout from "./Admin";
const Layout = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: state?.auth?.authToken,
  }));

  const _renderWebSiteLayout = () => {
    return (
      <>
        <Header />
        <div className="content" id="contentBox">
          {children}
        </div>
        <Footer />
      </>
    );
  };

  return isAuthenticated ? (
    <AdminLayout>{children}</AdminLayout>
  ) : (
    _renderWebSiteLayout()
  );
};
export default Layout;
