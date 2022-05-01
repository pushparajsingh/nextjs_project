import { useSelector } from "react-redux";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AdminLayout from "./Admin";
const Layout = ({ router, children }) => {
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
        <Footer router={router} />
      </>
    );
  };

  return isAuthenticated ? (
    <AdminLayout children={children} />
  ) : (
    _renderWebSiteLayout()
  );
};
export default Layout;
