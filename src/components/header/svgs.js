import React from 'react'

const SearchIcon = () => {
    return (
        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon">
            <path fillRule="evenodd" clipRule="evenodd" d="M41 37.7957L29.3398 26.1355C31.4032 23.4032 32.6269 20.0012 32.6269 16.3135C32.6269 7.30378 25.3231 0 16.3135 0C7.30378 0 0 7.30378 0 16.3135C0 25.3231 7.30378 32.6269 16.3135 32.6269C20.0012 32.6269 23.4032 31.4032 26.1355 29.3398L37.7957 41L41 37.7957ZM28.0954 16.3135C28.0954 22.8204 22.8204 28.0954 16.3134 28.0954C9.80645 28.0954 4.53149 22.8204 4.53149 16.3135C4.53149 9.80648 9.80645 4.53152 16.3134 4.53152C22.8204 4.53152 28.0954 9.80648 28.0954 16.3135Z" fill="#161E2E"/>
        </svg>
    )
}

const ArrowRight = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 27L30 9" stroke="black" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 8H31V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const CarretDown = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.3125 9.75L15.5 17.875L7.6875 9.75" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const SwirlyArrow = () => {
    return (
        <svg width="506" height="443" viewBox="0 0 506 443" fill="none" xmlns="http://www.w3.org/2000/svg" id="svg">
            <path d="M500.24 2.59033C508.515 42.4109 503.038 75.1946 484.619 111.412C460.364 159.104 422.245 205.459 374.209 230.03C345.705 244.609 298.683 265.8 267.77 248.034C242.871 233.724 241.839 194.681 247.78 169.926C251.468 154.56 264.311 138.224 279.817 152.054C313.111 181.748 297.745 235.606 281.274 269.746C244.615 345.728 200 393.5 97.5 398C88.6378 399.329 -7.4989 396.371 3.49996 393.5" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" id="path1"/>
            <path d="M89 374.5C84.1164 378.39 -1.10935 390.389 2.50117 394C16.2518 407.751 68.8793 432.036 76.5012 441" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" id="path2"/>
        </svg>
    )
}

export {
    SearchIcon,
    ArrowRight,
    CarretDown,
    SwirlyArrow
}