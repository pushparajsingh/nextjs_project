import { Carousel, Col, Container, Row } from "react-bootstrap"
import Title from "../common/Titles/Titles"
import styles from './Homepage.module.css'
import Image from 'next/image'
import bannerImg from '../../assets/images/yuva-home-banner.png'
import bannerImg1 from '../../assets/images/yuva-home-banner-2.png'
import bannerImg2 from '../../assets/images/yuva-home-banner-3.png'
import { html } from "../../assets/html"
import Script from 'next/script'
import { useEffect } from "react"


const Banner = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = '/sliderJs.js';
        script.async = true;
        document.body.appendChild(script);

    }, [])
    return (
        <>
            <Script
                src="/jquery.js" /> 
                <Script
                src="/sliderJs.js" />
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </>
    )
}
export default Banner