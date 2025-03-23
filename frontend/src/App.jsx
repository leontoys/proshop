import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

const App = () => {
  return (
    <>      <main className='py-3'>
        <Container>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Router>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;