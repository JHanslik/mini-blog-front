import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { postArticle } from "../api/articles";
import { getCategories } from "../api/categories";

import H1 from "../components/H1";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import Main from "../components/Main";

const NewArticle = () => {
    const navigate = useNavigate("");
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [errors, setErrors] = useState([]);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const allCategories = await getCategories();

        const categoriesSlug = allCategories.map((category) => category.slug);
        setCategories(categoriesSlug);
    };

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleCategorySelect = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            author,
            title,
            description,
            category,
        };

        const data = await postArticle(body);

        if (data.status === 201) {
            navigate(`/${data.response.slug}`);
        } else {
            setErrors(data.response);
        }
    };

    return (
        <Main>
            <H1>New Article</H1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <Input
                    type="text"
                    placeholder="Type here ..."
                    name="Author"
                    handleChange={handleAuthorChange}
                    error={errors.filter((error) => {
                        return error.param === "author";
                    })}
                />
                <Input
                    type="text"
                    placeholder="Type here ..."
                    name="Title"
                    handleChange={handleTitleChange}
                    error={errors.filter((error) => {
                        return error.param === "title";
                    })}
                />
                <Input
                    type="text"
                    placeholder="Type here ..."
                    name="Description"
                    handleChange={handleDescriptionChange}
                    error={errors.filter((error) => {
                        return error.param === "description";
                    })}
                />
                <Select
                    categories={categories}
                    handleChange={handleCategorySelect}
                    error={errors.filter((error) => {
                        return error.param === "category";
                    })}
                    label="Category"
                    text="Pick a category"
                />
                <Button type="submit" text="Submit" />
            </form>
        </Main>
    );
};

export default NewArticle;
