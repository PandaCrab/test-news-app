import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewsTable = () => {
    const [news, setNews] = useState();
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState({
        category: 'technology',
        country: ''
    })

    useEffect(() => {
        const getNews = async() => {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?category=technology&apiKey=85da6c8f1189401d867eb2b4874fddc5`);
            const data = await response.json();

            setNews(data);
        }

        getNews();
    }, []);

    return (
        <>
            <div>news table</div>
            <Link to='/news/test'>Show me news</Link>

        </>
    );
};

export default NewsTable;
