import React, {useRef, useEffect} from "react"

export default function LandingPageContainer() {
    let overlayDiv = useRef(null)

    useEffect(() => {
        console.log(overlayDiv)
    }, [])

    return (
        <section className="landing-page">
        </section>
    )
}