import React, {useEffect, useRef} from "react"
import { SearchIcon, ArrowRight, CarretDown } from "./svgs"
import { gsap } from "gsap";


function Navbar(props) {
    let navbarElements = useRef(null)

    useEffect(() => {
        gsap.from(
            navbarElements.children,
            {opacity: 0, delay: 1, stagger: 0.04}
        )
    }, [])


    return (
        <ul className="navbar-elements" ref={el => navbarElements = el}>
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
            <li>
                <SearchIcon />
            </li>
        </ul>
    )
}

export default Navbar


/*
                searchIcon={searchIcon}  
                arrowRight={arrowRight}
                carretDown={carretDown}

*/