import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { Badge, Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css'
import { useDispatch } from 'react-redux';
import { getListCategory } from '../../app/actions/ProductAction';

function Navigation() {
    const dispatch = useDispatch();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='fs-3' href="#home"><h3>EDUWORK POS</h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title='Category' id="collasible-nav-dropdown">
                            <NavDropdown.Item><Button className='btn-category' onClick={() => dispatch(getListCategory(''))}>Home</Button></NavDropdown.Item>
                            <NavDropdown.Item><Button className='btn-category' onClick={() => dispatch(getListCategory('Drink'))}>Drink</Button></NavDropdown.Item>
                            <NavDropdown.Item><Button className='btn-category' onClick={() => dispatch(getListCategory('Pastry'))}>Pastry</Button></NavDropdown.Item>
                            <NavDropdown.Item><Button className='btn-category' onClick={() => dispatch(getListCategory('Food'))}>Food</Button></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <div>
                        <Button variant="seondary" >
                            <Badge bg="dark" >
                                <FontAwesomeIcon size='2x' className='badge-wrapper' icon={faCartShopping}></FontAwesomeIcon>
                                <span className='badge'>10</span>
                            </Badge>
                        </Button>
                    </div>
                    <div>
                        <Button variant="seondary" >
                            <Badge bg="dark" >
                                <FontAwesomeIcon size='2x' className='badge-wrapper' icon={faUser}></FontAwesomeIcon>
                                <span className='badge'>10</span>
                            </Badge>
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;