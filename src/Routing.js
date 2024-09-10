import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes ,Route} from 'react-router-dom';
import Home from './Home';
import Electronics from './Electronics';
import Jewellery from './Jewellery';
import Mencloth from './Mencloth';
import Womencloth from './Womencloth';

function Routing() {
  
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/mobile">Mobile</Nav.Link>
            <Nav.Link href="/laptop">Laptop</Nav.Link>
            <Nav.Link href="/electronics">Electronics</Nav.Link>
            <Nav.Link href="/jewellery">Jewellery</Nav.Link>
            <Nav.Link href="/men Cloth">Men Cloth</Nav.Link>
            <Nav.Link href="/women cloth">Women Cloth</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
            <Nav.Link><button>Login</button></Nav.Link>
            <Nav.Link><button>Register</button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/electronics' element={<Electronics></Electronics>}></Route>
        <Route path='jewellery' element={<Jewellery></Jewellery>}></Route>
        <Route path='men cloth' element={<Mencloth></Mencloth>}></Route>
        <Route path='women cloth' element={<Womencloth></Womencloth>}></Route>
        

      </Routes>
    </>
  );
}
export default Routing;