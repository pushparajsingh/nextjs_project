export const emailPattern =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const appRoutes = {
  /**
   * @var pathIsUnProtected Add before login routes here
   */
  HOME_PAGE: "/",
  ABOUT_US_PAGE: "/about",
  SERVICE_PAGE: "/services",
  PORTFOLIO_PAGE: "/portfolio",
  TEAM_PAGE: "/teams",
  GALLERY_PAGE: "/gallery",
  CAREER_PAGE: "/career",
  CONTACT_US_PAGE: "/contact",
  LOGIN_PAGE: "/admin/login",
  /**
   * @var pathIsProtected Add after login routes here
   */

  TEAM_LIST: "/admin/team",
  TEAM_CREATE: "/admin/team/create",
  TEAM_UPDATE: "/admin/team/[id]",
};
