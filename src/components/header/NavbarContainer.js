import React, {useEffect, useRef} from "react"
import Navbar from "./Navbar"
import { gsap } from "gsap";

export default function NavbarContainer() {
    let logo = useRef(null)

    useEffect(() => {
        gsap
        .from(
            logo,
            {opacity: 0, delay: 1.2}
        )
    }, []) 

    return (
        <nav className="navbar">
            <img src="./dropbox-logo.svg" alt="Dropbox logo" ref={el => logo = el} />
            <Navbar />
        </nav>
    )
}