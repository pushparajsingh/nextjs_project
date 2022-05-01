import React, { useState, useEffect } from "react";
import { appRoutes } from "../constants";
import { FullPageLoading } from "../components/Loading/Loading";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const isBrowser = () => typeof window !== "undefined";

const ProtectedRoutes = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { isAuthenticated, logout } = useSelector((state) => ({
    isAuthenticated: state?.auth?.authToken,
    logout: state?.auth?.logout,
  }));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    handleLoader();
  }, [logout]);

  const handleLoader = () => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  let unprotectedRoutes = [
    appRoutes.HOME_PAGE,
    appRoutes.ABOUT_US_PAGE,
    appRoutes.SERVICE_PAGE,
    appRoutes.PORTFOLIO_PAGE,
    appRoutes.TEAM_PAGE,
    appRoutes.GALLERY_PAGE,
    appRoutes.CAREER_PAGE,
    appRoutes.CONTACT_US_PAGE,
    appRoutes.LOGIN_PAGE,
  ];

  let protectedRoutes = [
    appRoutes.PROFILE,
    appRoutes.DASHBOARD,
    appRoutes.TEAM_LIST,
    appRoutes.TEAM_CREATE,
    appRoutes.TEAM_UPDATE,
  ];

  /**
   * @var pathIsUnProtected Checks if path exists in the unprotectedRoutes routes array
   */
  const pathIsUnProtected = unprotectedRoutes.indexOf(router.pathname) === -1;
  /**
   * @var pathIsProtected Checks if path exists in the protectedRoutes routes array
   */
  const pathIsProtected = protectedRoutes.indexOf(router.pathname) === -1;

  if (loading) {
    return <FullPageLoading />;
  }

  if (isBrowser() && !isAuthenticated && pathIsUnProtected) {
    router.push(appRoutes.HOME_PAGE);
  } else if (isBrowser() && isAuthenticated && pathIsProtected) {
    router.push(appRoutes.DASHBOARD);
  }
  return children;
};

export default ProtectedRoutes;
