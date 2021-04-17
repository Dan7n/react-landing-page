import React from "react"
import SingleArticle from "./SingleArticle"
import listOfArticles from "./articleClasses"

export default function ArticlesContainer() {    
    return (
        <section className="articles">
            <div className="article-inner-container">
                {listOfArticles.map((article, i) => {
                return (
                    <SingleArticle 
                        key={i}
                        src={article.src}
                        alt={article.alt}
                        header={article.header}
                        author={article.author}
                    />
                )
            })}
            </div>
        </section>
    )
}