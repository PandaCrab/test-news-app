import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Search, FilterAltOutlined } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

import { DropdownFilter, NewsTable } from './index';
import { Articles, FilterTypes } from '../types';

import '../Styles/NewsContainerStyles.css';

const baseUrl = new URL('https://newsapi.org/v2/top-headlines?');
const apiKey: string = process.env.REACT_APP_API_KEY ?? '';

const NewsContainer = () => {
    const [news, setNews] = useState<Articles[] | undefined>();
    const [search, setSearch] = useState<string>('');
    const { state } = useLocation();
    const [filter, setFilter] = useState<FilterTypes>(state ?? {
        category: '',
        country: 'us'
    });
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        const getNews = async() => {
            baseUrl.searchParams.append('category', (filter.category ?? ''));
            baseUrl.searchParams.append('country', (filter.country ?? ''));
            baseUrl.searchParams.append('apiKey', apiKey);
            const response = await fetch(baseUrl.toString());
            const data = await response.json();
            setNews(data.articles);
        };

        getNews();
    }, []);

    // useEffect(() => {
    //     const getNews = async() => {
    //         const response = 
    //                 await fetch(
    //                     `${baseUrl}q=${search.length > 3 ? search : ''}&category=${filter.category}&country=${filter.country}&apiKey=${apiKey}`
    //                 );
    //         const data = await response.json();

    //         setNews(data.articles);
    //     };

    //     getNews();
    // }, [search, filter]);

    return (    
        <>
            <div className="titleSearch">
                <h2>Formula Top Headlines</h2>
                <div className="searchFilterContainer">
                    <div className='searchBar'>
                        <Search sx={{ fontSize: 20 }} />
                        <input 
                            type="text"
                            name="searchInput"
                            className="searchInput"
                            onChange={({ target }) => setSearch(target.value)}
                            value={search}
                            placeholder="Search article"
                        />
                    </div>
                    <Button
                        sx={{ 
                            backgroundColor: "#b5c0c9", 
                            color: 'black',
                            ':hover': {
                                bgcolor: '#303030',
                                color: 'white'
                            }
                        }}
                        variant="contained"
                        startIcon={<FilterAltOutlined />}
                        size="small"
                        onClick={() => setToggle((prev) => !prev)}
                    >
                        Filters
                    </Button>
                </div>
            </div>
            {toggle && (
                <DropdownFilter filter={filter} setFilter={setFilter} />
            )}
            <NewsTable news={news} filter={filter} />
        </>
    );
};

export default NewsContainer;
