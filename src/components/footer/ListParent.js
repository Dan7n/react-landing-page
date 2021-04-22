import React from 'react'
import ListChildren from "./ListChildren"

export default function ListParent() {
    return (
        <section className="footer-list-outer">
            <div className="footer-list-inner">
                <ul>
                    <h5>Dropbox</h5>
                    <ListChildren liTags={4} />
                </ul>
                <ul>
                    <h5>Using Dropbox</h5>
                    <ListChildren liTags={4} />
                </ul>
                <ul>
                    <h5>About Us</h5>
                    <ListChildren liTags={3} />
                </ul>
                <ul>
                    <h5>Legal</h5>
                    <ListChildren liTags={6} />
                </ul>
                <ul>
                    <h5>Careers</h5>
                    <ListChildren liTags={4} />
                </ul>
            </div>
        </section>
    )
}
