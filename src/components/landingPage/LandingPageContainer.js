import React, {useRef, useEffect} from "react"
import { gsap } from "gsap";

export default function LandingPageContainer() {
    let img = useRef(null)
    let text = useRef(null)

    useEffect(() => {
        gsap.from(
            img,
            {opacity: 0, left: -500, duration: 1.3, delay: 3.3}
        )
    }, [])

    useEffect(() => {
        gsap.from(
            text,
            {opacity: 0, duration: 1.3, delay: 2.8}
        )
    }, [])



    return (
        <section className="landing-page">
            <div className="inner-container">
                <div className="img-container">
                    <img
                        src="./landing-page.png"
                        alt="A girl looking outside a window"
                        className="landing-page-img"
                        ref={el => img = el}
                    />
                </div>
                <div 
                    className="landing-page-text"
                    ref={el => text = el}>
                        <h1>Some Bold Text About How Cool This Site Is</h1>
                        <a href="#">Explore</a>
                </div>
            </div>
        </section>
    )
}