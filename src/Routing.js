import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes ,Route, Link} from 'react-router-dom';
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
            <Link to="/">Home</Link>
            <Link to="/mobile">Mobile</Link>
            <Link to="/laptop">Laptop</Link>
            <Link to="/electronics">Electronics</Link>
            <Link to="/jewellery">Jewellery</Link>
            <Link to="/men Cloth">Men Cloth</Link>
            <Link to="/women cloth">Women Cloth</Link>
            <Link to="/help">Help</Link>
            <Link><button>Login</button></Link>
            <Link><button>Register</button></Link>
              
        
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