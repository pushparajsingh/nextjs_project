import {React} from 'react'
import {
    Container,
    Nav,
    Navbar
} from 'react-bootstrap'
import Image from 'next/image'

import Logo from '../../../assets/images/yuvasoft-logo.png'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <Navbar className={styles.HeaderPrimary} expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className={styles.logo}>
                        <Image src={Logo} className='img-fluid' alt="Yuvasoft Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className='active'>Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="/teams">Team</Nav.Link>
                        <Nav.Link href="/career">Career</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;