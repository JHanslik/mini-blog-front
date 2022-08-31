import { useEffect, useState } from "react";
import Main from "../components/Main";
import H1 from "../components/H1";
import ArticlePreview from "../components/ArticlePreview";
import { getArticles } from "../api/articles";

function Home(props) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        const articles = await getArticles();
        console.log(articles);
        setArticles(articles);
    };

    return (
        <Main>
            <H1>Homepage</H1>
            {articles.map((article) => {
                return (
                    <ArticlePreview
                        key={article.slug}
                        title={article.title}
                        author={article.autor}
                        description={article.description}
                        date={article.date}
                        slug={article.slug}
                    />
                );
            })}
        </Main>
    );
}

export default Home;
