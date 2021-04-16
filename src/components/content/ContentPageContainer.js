import React from "react"
import Content from "./Content"

export default function ContentPageContainer() {
    return (
        <section className="content-section">
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
        </section>
    )

}