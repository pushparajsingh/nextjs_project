import { React } from 'react'
import {
    Container,
    Nav,
    Navbar
} from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../assets/images/yuvasoft-logo.png'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <Navbar className={styles.HeaderPrimary} expand="lg">
                <Container>
                    <Navbar.Brand href="/" className={styles.logo}>
                        <Image src={Logo} className='img-fluid' alt="Yuvasoft Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link href="/" className={styles.active}>Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/portfolio">Portfolio</Link>
                            <Link href="/teams">Team</Link>
                            <Link href="/career">Career</Link>
                            <Link href="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;