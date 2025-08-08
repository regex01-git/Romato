import { Navbar, Container, Nav } from 'react-bootstrap';
import { Search, Cart, Person } from 'react-bootstrap-icons';
import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';
import { logout } from '../../features/user';
import { useDispatch } from 'react-redux';
export default function NavBar() {
  const dispatch=useDispatch()
  const cart = useSelector(store => store.cart);
  const userdata = useSelector(store => store.user);
  // const storage=JSON.parse(localStorage.getItem('usertoken'))
  // cart && console.log("navbar", cart.totalCartQuantity)
  // const obj=JSON.parse(localStorage.getItem('usertoken'));

  return (
    <Navbar bg="white" data-bs-theme="light" expand="lg">
      <Container>
        {/* Brand on the left */}
        <Navbar.Brand href="#home" ><span className='tomato'>Tomato.</span></Navbar.Brand>

        {/* Collapse toggle for mocbile */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Center links and right icons */}
        <Navbar.Collapse id="main-navbar">
          {/* Center menu: justify-content-center using ms-auto me-auto */}
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/"><span>Home</span></Nav.Link>
            <Nav.Link as={NavLink} to="/menu"><span>Menu</span></Nav.Link>
            <Nav.Link as={NavLink} to="/mobile"><span>Mobile App</span></Nav.Link>
            <Nav.Link as={NavLink} to="/contact"><span>Contact Us</span></Nav.Link>
            {
              userdata.isAdmin?<Nav.Link as={NavLink} to="/admin"><span>Admin</span></Nav.Link>:null
            }
          </Nav>

          {/* Icons (search, cart, sign in) aligned right */}
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#search"><span><Search size={20} /></span></Nav.Link>
            <Nav.Link as={NavLink} to="/cart"><span><Cart size={20} />
              <sup>{
                cart ? <span>{cart.totalCartQuantity}</span> : null
              }</sup>
            </span></Nav.Link>
            {
              !userdata.token?<Nav.Link as={NavLink} to="/signin"><span style={{ padding: "15px 15px", border: "1px solid rgb(243, 121, 35)", borderRadius: "0 30%" }}>
              Sign in<Person size={20} /></span></Nav.Link>:
              <button onClick={()=>dispatch(logout())} style={{ padding: "15px 15px", border: "1px solid rgb(243, 121, 35)", borderRadius: "0 30%" }}>
              Log out<Person size={20} /></button>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
