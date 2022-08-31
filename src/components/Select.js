import React from "react";

function Select({ handleChange, categories, error, text, label }) {
    return (
        <>
            <label className="peer-focus:font-medium text-sm text-gray-900 dark:text-gray-900 duration-300 transform scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                {label}
            </label>
            <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-[340px]"
                onChange={handleChange}
            >
                <option value="">{text}</option>
                {categories.map((category) => {
                    return (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    );
                })}
            </select>
            {error && (
                <>
                    {error.map((error) => {
                        return (
                            <small
                                key={error}
                                className="text-red-500 font-medium"
                            >{`${error.msg} `}</small>
                        );
                    })}
                </>
            )}
        </>
    );
}

export default Select;
