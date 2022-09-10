import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'
import rupiah from '../../utils';
// import axios from 'axios';
// import Pagination from '../Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getListCategory, getProducts } from '../../app/actions/ProductAction';
// import Tag from '../Badge';

const CardProduct = () => {

    const { getProductResult } = useSelector((state) => state.ProductsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    useEffect(() => {
        if (!getProductResult === "") {
            dispatch(getListCategory());
        }
    })
    // // const [products, setProducts] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(8);

    // const getProduct = async () => {
    //     const response = await axios.get('http://localhost:5000/api/products/');
    //     setProducts(response.data.data);
    // }

    // useEffect(() => {
    //     getProduct()
    // }, [])

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = getProductResult.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    // const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <Container>
                <Row>
                    {getProductResult && getProductResult.map((product) => {
                        return (
                            <Col lg={3} className='mt-4'>
                                <Card key={product._id}>
                                    <Card.Img className='img-url' variant="top" src={`http://localhost:5000/images/products/${product.image_url}`} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text className='fs-6'>{product.description}</Card.Text>
                                        <Card.Title className='mt-3 mb-3'>{rupiah(product.price)}</Card.Title>
                                        <Button variant="primary"><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
            {/* <Container className='mt-3'>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={products.length}
                    paginate={paginate}
                />
            </Container> */}
        </div>
    )
}

export default CardProduct
