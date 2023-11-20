import React from 'react';
import { Link } from 'react-router-dom';

const NewsPage = (newsObj) => {
    return (
        <>
            <Link to="..">Back icon</Link>
            <div>This if hte news</div>
        </>
    );
};

export default NewsPage;
