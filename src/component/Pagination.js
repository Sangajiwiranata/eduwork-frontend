import React from 'react';
import { Button } from 'react-bootstrap';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item m-1'>
                        <Button onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;