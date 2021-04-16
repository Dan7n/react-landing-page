import React from "react"
import { ArrowRight, CarretDown } from "./svgs"

export default function NavbarMobile() {
    return (

        <ul className="navbar-mobile">
            <li>News</li>
            <li>Work Culture</li>
            <li>
                <p>Made in Dropbox</p>
                <CarretDown /> 
            </li>
            <li>
                <p>Featured</p>
                <CarretDown /> 
            </li>
            <li>
                <p>Tech blog</p>
                <ArrowRight />
            </li>
        </ul>
    )
}