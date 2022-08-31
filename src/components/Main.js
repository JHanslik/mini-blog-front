import React from "react";

const Main = ({ children }) => {
    return (
        <main className="py-5 text-black flex flex-col items-center">
            {children}
        </main>
    );
};

export default Main;
