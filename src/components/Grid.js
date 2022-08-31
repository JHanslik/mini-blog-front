import React from "react";

const Grid = ({ children }) => {
    return (
        <section className="flex gap-5 flex-wrap justify-center">
            {children}
        </section>
    );
};

export default Grid;
