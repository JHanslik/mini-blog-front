import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import NewArticle from "./pages/NewArticle";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new-article" element={<NewArticle />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
