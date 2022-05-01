import React, { useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../../assets/images/yuvasoft-logo.png";
import styles from "./Admin.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { authLogout, authReset } from "../../../redux/Auth/Auth.action";
import { useRouter } from "next/router";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { logout } = useSelector((state) => ({
    logout: state?.auth?.logout,
  }));

  useEffect(() => {
    if (logout) {
      dispatch(authReset());
    }
  }, [logout]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className={styles.header}
    >
      <Navbar.Brand href="/" className={styles.logo}>
        <Image src={Logo} alt="Yuvasoft Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <NavDropdown
            title="Admin user"
            id="collasible-nav-dropdown"
            className={styles.profileDropdown}
          >
            <div
              className="dropdown-item"
              onClick={() => router.push("/admin/profile")}
            >
              <FaUserAlt /> Profile
            </div>
            <NavDropdown.Divider />
            <div
              className="dropdown-item"
              onClick={() => dispatch(authLogout())}
            >
              <FaSignOutAlt /> Logout
            </div>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
