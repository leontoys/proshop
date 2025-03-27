import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <>      <main className='py-3'>
        <Container>
          <Router>
            {<Header />}
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path='/product/:id' element={<ProductScreen/>}/>
              <Route path='/cart' element={<CartScreen/>}></Route>
              <Route path='/login' element={<LoginScreen/>}></Route>
            </Routes>
          </Router>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;