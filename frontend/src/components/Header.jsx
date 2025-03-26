import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { useSelector  } from "react-redux";

const Header = () => {

  const {cartItems} = useSelector((state)=>state.cart) //read from redux-state
  
  return (
    <header> {/**navbar with bootstrap */}
      <Navbar bg='primary' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={logo}/>
            ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link to='/cart' as={Link}>
                <FaShoppingCart /> Cart
                {cartItems.length > 0 && (
                  <Badge pill bg='success' style={{marginLeft:'5px'}}>
                    {cartItems.reduce((accumulator,current)=>accumulator+current.qty,0)}
                  </Badge>
                )}
              </Nav.Link>
              <Nav.Link to='/login' as={Link}>
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;