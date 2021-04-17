import React, {useEffect, useRef} from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function SingleArticle(props) {
    let imgOverlay = useRef(null)

    useEffect(() => {
        gsap.to(
            imgOverlay, {
                scrollTrigger: {
                    trigger: imgOverlay,
                    start: "top bottom",
                    markers: false,
                    toggleActions: "restart none none none"
                },
                width: 0,
                delay: 0.5,
                duration: 1.3,
                ease: "power2.out"
            }
        )
    })


    return (
        <article>
            <div className="article-img">
                <img src={props.src} alt={props.alt} />
                <div className="img-overlay" ref={el => imgOverlay = el} />
            </div>
            <div className="article-text">
                <h2>{props.header}</h2>
                <p>{props.author}</p>
            </div>
    
        </article>
    )
}