import React, {useRef, useEffect} from "react"
import { gsap } from "gsap";

export default function LandingPageContainer() {
    let img = useRef(null)

    useEffect(() => {
        gsap.from(
            img,
            {opacity: 0, left: 0, duration: 1.3, delay: 1.2}
        )
    }, [])



    return (
        <section className="landing-page">
            <img 
                src="./landing-page.png" 
                alt="A girl looking outside a window" 
                className="landing-page-img" 
                ref={el => img = el} 
            />
            <div className="landing-page-text">
                <h1>Some Bold Text About How Cool This Site Is</h1>
            </div>
        </section>
    )
}