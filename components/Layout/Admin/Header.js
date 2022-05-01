import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../../assets/images/yuvasoft-logo.png";
import styles from "./Admin.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { authLogout } from "../../../redux/Auth/Auth.action";

const Header = () => {
  const dispatch = useDispatch();
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
            <div className="dropdown-item">Action</div>
            <NavDropdown.Divider />
            <div
              className="dropdown-item"
              onClick={() => dispatch(authLogout())}
            >
              Logout
            </div>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
