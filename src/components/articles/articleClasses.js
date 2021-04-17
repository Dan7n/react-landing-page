// The only reason I'm doing it this way is because I wanted to refresh my 
//memory on JS classes and constructors

let listOfArticles = []

class Article {
    constructor(src, alt, header, author) {
        this.src = src;
        this.alt = alt;
        this.header = header;
        this.author = author;
    }
}

const article1 = new Article (
    "./art-article.jpg",
    "Pain brushes of different sizes",
    "Some article about art",
    "By: Ellie Gustavsson "
)

const article2 = new Article (
    "./music-article.jpg",
    "Caset tape",
    "Some article about music",
    "By: Eveline Nyström  "
)

const article3 = new Article (
    "./people-article.jpg",
    "Mother sitting on the bed with a child",
    "Some article about people",
    "By: Henning Berg"
)

listOfArticles.push(article1, article2, article3)

export default listOfArticles