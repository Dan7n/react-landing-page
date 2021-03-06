import React, {useRef, useEffect} from "react"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function LandingPageContainer() {
    let overlayDiv = useRef(null)

    useEffect(() => {
        gsap.from (
            overlayDiv,
            {width: 0, duration: 1.7, ease: "power3.out"},
        )
    }, [])

    return (
        <>
            <div className="overlay-left" ref={el => overlayDiv = el}></div>
        </>
    )
}