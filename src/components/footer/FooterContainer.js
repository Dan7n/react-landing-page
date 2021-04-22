import React from "react"
import Subscribe from "./Subscribe"
import ListParent from "./ListParent"
import Disclaimer from "./Disclaimer"

export default function FooterContainer() {
    return (
        <section className="footer">
            <Subscribe />
            <ListParent />
            <Disclaimer />
        </section>
    )
}