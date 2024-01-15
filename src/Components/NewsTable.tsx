import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';  
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { LinkOutlined } from '@mui/icons-material';

import { FilterTypes, Articles } from '../types';

import noImage from '../imgs/no_image.jpg';

interface Props {
    news: Articles[] | undefined;
    filter: FilterTypes
}

const NewsTable: React.FC<Props> = ({ news, filter }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = ({ target }: {target: { value: string }}) => {
        setRowsPerPage(parseInt(target.value, 10));
        setPage(0);
    };

    return(
        <TableContainer component={Paper}>
            <Table aria-label="News table">
                <TableHead sx={{ backgroundColor: "#b5c0c9", height: 20 }}>
                    <TableRow>
                        <TableCell width="160">Image</TableCell>
                        <TableCell width="200">Title</TableCell>
                        <TableCell width="50">Authors</TableCell>
                        <TableCell width="250">Description</TableCell>
                        <TableCell width="100">Publication date</TableCell>
                        <TableCell width="80">Original URL</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {news && news.length ? (rowsPerPage > 0
                            ? news.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : news
                        ).map((item: Articles, index: number) =>
                            item.title !== '[Removed]' && (
                            <TableRow key={index}>
                                <TableCell>{item.urlToImage ? (
                                    <img width={150} loading='lazy' src={item.urlToImage} alt={item.title} />
                                ) : (
                                    <img width={150} src={noImage} alt='no_image' />
                                )}</TableCell>
                                <TableCell>
                                    <Link 
                                        to={`news/${item.title}`}
                                        state={({item, filter})}
                                        className="titleLink"
                                    >
                                        {item?.title.slice(0, 50) + '...' ?? 'Whithout title'}
                                    </Link>
                                </TableCell>
                                <TableCell>{item.author ?? 'Without author'}</TableCell>
                                <TableCell>{item.description ? (item.description.slice(0, 70) + '...') : 'No description'}</TableCell>
                                <TableCell>{item?.publishedAt.slice(0, 10) ?? 'Unknown date'}</TableCell>
                                <TableCell align="center">
                                    <a href={item.url} rel="noreferrer" target="_blank" >
                                        <LinkOutlined sx={{ color: "gray" }} />
                                    </a>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell colSpan={6} align="center">
                                    <CircularProgress disableShrink />
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={6}
                            count={news ? news.length : 0}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
};

export default NewsTable;
