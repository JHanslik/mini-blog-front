const getArticles = async () => {
    const request = await fetch("http://localhost:5000/article");
    const response = await request.json();

    return response;
};

const getArticle = async (slug) => {
    const request = await fetch(`http://localhost:5000/article/${slug}`);
    const response = await request.json();

    return response;
};

const postArticle = async (body) => {
    const request = await fetch("http://localhost:5000/article", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    const response = await request.json();

    return {
        status: request.status,
        response,
    };
};

export { getArticles, getArticle, postArticle };
