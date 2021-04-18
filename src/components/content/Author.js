import React from 'react'

export default function Author(props) {
    return (
        <>
        <section className="content-body">
            <div className="content-body-header">
                <h1>The Author</h1>
            </div>
            <div className="content-body-body">
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.content}</p>
                </div>
                <div className="content-body-img">
                    <img src={props.src} alt="Headshot of the author of this article" />
                </div>
            </div>
        </section>
        <aside className="content-aside" />
    </>
    )
}

Author.defaultProps = {
    name: "It’s-a-me, Danny!",
    content: "Danny is an awesome dude and a passionate frontend developer currently studying at Medieinstitutet",
    src: "./me.png"
}