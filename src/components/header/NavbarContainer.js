import React, {useEffect, useRef, useState} from "react"
import Navbar from "./Navbar"
import NavbarMobile from "./NavbarMobile"
import { gsap } from "gsap";

export default function NavbarContainer() {
    let logo = useRef(null)

    const [checked, setChecked] = useState(false)

    useEffect(() => {
        gsap
        .from(
            logo,
            {opacity: 0, delay: 1.2}
        )
    }, []) 

    function handleChange() {
        setChecked(prevState => !prevState)
    }


    return (
        <nav className="navbar">
            <label htmlFor="hamgurgerToggle" id="hamgurger" >
            <img src="./hamgurger.svg" alt="hamburder menu" />
                <input type="checkbox" id="hamgurgerToggle" onChange={handleChange} checked={checked} />
            </label>
            <img src="./dropbox-logo.svg" alt="Dropbox logo" ref={el => logo = el} />
            <Navbar />
            {checked && <NavbarMobile />}
        </nav>
    )
}