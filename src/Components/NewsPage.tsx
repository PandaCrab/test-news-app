import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import '../Styles/NewsPageStyles.css';

const NewsPage = () => {
    const {state} = useLocation();
    const {item, filter} = state;

    return (
        <div className="container">
            <div className="newsHeader">
                <Link 
                    className="arrowBack"
                    to=".."
                    state={filter}
                >
                    <ArrowBack sx={{ fontSize: 22 }} />
                </Link>
                <div>{item.title}</div>
            </div>
            <div className="publicationInfo">
                <div>Source: {item.source.name}</div>
                <div>Publication date: {item.publishedAt.slice(0, 10)}</div>
            </div>
            <div className="articlePart">
                <h4>Description</h4>
                <p>{item.description}</p>
            </div>
            {item.urlToImage ? (<img className="image" src={item.urlToImage} alt={item.title} />
            ) : (
                <div className="noImage">No image available</div>
            )}
            <div className="articlePart">
                <h4>Content</h4>
                <p>{item.description}</p>
            </div>
            <p className="author">Author: {item.author ?? 'No Author'}</p>
        </div>
    );
};

export default NewsPage;
