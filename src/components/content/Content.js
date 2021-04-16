import React from "react"

export default function Content(props) {

    function paragraphTags(numOfParagraphTags) {
        let pTags = []
        for (let i = 0; i < numOfParagraphTags; i++) {
            pTags.push(<p key={i}>{props.content}</p>)
        }
        return pTags
    }

    return (
        <>
        <section className="content-header">
            <h1>{props.header}</h1>
        </section>
        <section className="content-body">
            {paragraphTags(props.numOfParagraphTags)}
        </section>
        <aside className="content-aside">
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