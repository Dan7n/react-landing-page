import React, {useEffect, useRef} from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Content(props) {
    let pageSection = useRef(null)
    let header = useRef(null)
    let image = useRef(null)

    //create a specified number of <p> tags
    function paragraphTags(numOfParagraphTags) {
        let pTags = []
        for (let i = 0; i < numOfParagraphTags; i++) {
            pTags.push(<p key={i}>{props.content}</p>)
        }
        return pTags
    }

    //section animations
    useEffect(() => {
        gsap.timeline()
            .from(header, {
                scrollTrigger: {target: header, start: "top bottom"},
                opacity: 0,
                ease: "slow",
                delay: 1.3,
                duration: 1
            })
            .from(pageSection, {
                scrollTrigger: {target: pageSection, start: "top bottom"},
                opacity: 0,
                left: 300,
                duration: 0.5,
                ease: "slow",

            })
            .from(image, {
                scrollTrigger: {target: pageSection, markers: false, start: "top center"},
                opacity: 0,
                right: 300,
                ease: "slow",
                duration: 0.5
            })
    })

    return (
        <>
        <section className="content-header" ref={el => header = el}>
            <h1>{props.header}</h1>
        </section>
        <section className="content-body" ref={el => pageSection = el}>
            {paragraphTags(props.numOfParagraphTags)}
        </section>
        <aside className="content-aside" ref={el => image = el}>
            <img src={props.src} alt={props.alt} />
        </aside>
        </>
    )
}

Content.defaultProps = {
    header: "Header text",
    content: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
    src: "./illustration1.png",
    alt: "illustration of someone working",
    numOfParagraphTags: 3
}