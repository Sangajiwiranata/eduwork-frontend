import { faTag } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container } from "react-bootstrap";
import './style.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getListCategory } from '../../app/actions/ProductAction';


const Tag = () => {
    const { categoryResult } = useSelector((state) => state.ProductsReducer);

    let titleCategory = ""
    if (categoryResult === '') {
        titleCategory = 'Home'
    } else {
        titleCategory = categoryResult;
    }

    const dispatch = useDispatch();
    const [tags, setTags] = useState('');

    const getcategory = async () => {
        const response = await axios.get('http://localhost:5000/api/Tags/');
        setTags(response.data);
    }

    useEffect(() => {
        getcategory()
    }, [])

    return (
        <div>
            <Container className='mt-4 mb-2'>
                <h3>{titleCategory}</h3>
                <p>Tags : </p>
                {tags && tags.map((tag) => {
                    return (
                        <Button variant="secondary" className="btn-icon" onClick={() => dispatch(getListCategory(tag.name))}>
                            <FontAwesomeIcon className='icon-aw' icon={faTag} />
                            {tag.name}
                        </Button>
                    )
                })}
            </Container>
        </div >
    )
}

export default Tag;
