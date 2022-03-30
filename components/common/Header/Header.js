
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
import { useRouter } from 'next/router'
const Header = () => {
    const router = useRouter()
    
    const headerLinks=[
        {name:"Home",path:"/"},
        {name:"About",path:"/about"},
        {name:"Services",path:"/services"},
        {name:"Portfolio",path:"/portfolio"},
        {name:"Team",path:"/teams"},
        {name:"Career",path:"/career"},
        {name:"Contact",path:"/contact"},
    ]

    return (
        <div>
            <Navbar className={styles.HeaderPrimary} expand="lg">
                <Container>
                    <Navbar.Brand href="/" className={styles.logo}>
                        <Image src={Logo} className='img-fluid' alt="Yuvasoft Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                       { headerLinks.map((item, index)=>(
                           <>
                            <Link href={item.path} key={index} ><a className={`${router.pathname==item.path?styles.active:"active"}`}>{item.name}</a></Link>
                    
                            </>
                       ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;