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