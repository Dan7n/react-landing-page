import React, {useRef, useEffect} from "react"
import Content from "./Content"
import Author from "./Author"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function ContentPageContainer() {
    let sectionRef = useRef(null)

    useEffect(() => {
        gsap.from(
            sectionRef, {
                scrollTrigger: {
                    trigger: sectionRef,
                    start: "top bottom",
                },
                opacity: 0,
                duration: 1,
                ease: "slow"
            }
        )
    })

    return (
        <section className="content-section" id="header1" ref={el => sectionRef = el}>
            <article className="content-article">
                <Content
                    header="Some header explaining the revolutionary new feature we’re announcing in this article."
                    src="./illustration1.png"
                    numOfParagraphTags={3}
                />
            </article>
            <article className="content-article">
                <Content 
                    header="Another header explaining some other stuff about this cool feature that’s gonna change your life."
                    src="./illustration2.png"
                    numOfParagraphTags={5}
                />
            </article>
            <article className="content-article">
                <Content 
                    header="Some big stuff comeing in the next few days!"
                    src="./illustration3.png"
                    numOfParagraphTags={3}
                />
            </article>
            <article className="content-article author">
                <Author />
            </article>
        </section>
    )

}