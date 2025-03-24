import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
//import products from '../products';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    //axios call should be async - but use effect can't be
    //so helper function
    const fetchProducts = async()=>{
      const response = await axios.get('/api/products')
      setProducts(response.data)
    }
    fetchProducts()
  },[])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;