import { BsSearch, BsCart2 } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div className='header'>

      <div className='d-none d-md-block hader-container'>
        <div className='top-serch-row'>
          <ul>
            <li className="li-logo">
              <a href="">
                <img src="amalogo.png" alt="" />
              </a>
            </li>

            <li className="li-gps">
              <a href="">&nbsp;&nbsp; &nbsp;&nbsp;Hello <br /><i className="fas fa-map-marker-alt">
              </i> select your address</a>
            </li>

            <li className="top-search-input">

              <button>All <i className="fa fa-caret-down"></i></button>
              <input type="text" className="insert-input" />
              
              <i className="fa fa-search"></i>

            </li>
            <li className="li-country">
              <a href="">
                <img src="usa.png" alt="" />
              </a>
            </li>
            <li className="li-account">
              <a href="">Hello, Sign in <br />Account & Lists <i className="fas fa-caret-down"></i></a>
            </li>
            <li className="li-return"><a href="">Returns<br />& Orders</a>
            </li>
            <li className="li-cart">
              <a href=""><i className="fa fa-shopping-cart text-light"></i>
              <input type="text" id="cart-count" value="0" /> 
            
            </a>
            </li>
          </ul>
        </div>


        <div className='top-navlist-elem'>
          <ul>
            <li className="li-all"><i className="fas fa-bars"></i> All</li>
            <li className="li-gps"><a href="">Best Seller</a></li>
            <li className="li-search"><a href="">Amazon Basic</a></li>
            <li className="li-country"><a href="">New Release</a></li>
            <li className="li-account"><a href="">Customer Service</a></li>
            <li className="li-today-deal"><a href="">Today's Deal's</a></li>
            <li className="li-prime"><a href="">Prime&nbsp;&nbsp;</a></li>
            <li className="li-books"><a href="">Books</a></li>
            <li className="li-Registry"><a href="">Registry</a></li>
            <li className="li-Amazon- Home"><a href="">Amazon Home</a></li>
            <li className="li-country"><a href="">Music &nbsp;</a> &nbsp;</li>
            <li className="li-account"><a href="">Gift Cards</a></li>
            <li className="li-return"><a href="">Toys & Games</a></li>
            <li className="li-cart"><a href="">Fashions&nbsp;&nbsp;</a></li>
            <li className="li-Buy-Balck"><a href="">Buy Balck now and beyond</a></li>
          </ul>
        </div>
      </div>

      <Navbar variant="light" style={{ background: "#141a29" }} expand="lg" className="d-md-none className='text-light'">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>Amazon</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" variant="light">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default Header;

