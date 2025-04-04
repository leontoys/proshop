import { useParams , useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { addToCart } from "../slices/cartSlice";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ProductScreen = () => {
  const { id: productId } = useParams();//rename it as produtId

  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId)

  const [qty,setQty] = useState(1)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const addToCartHandler = () => {
    console.log("add to cart handler",{...product,qty})
    dispatch(addToCart({...product,qty}))//send product with updated quantity
    console.log("navigate to cart")
    navigate('/cart')//show cart
  }

  return (
    <>
      <Link to='/' className='btn btn-dark my-3'>{/** back to home page */}
       Go Back
      </Link>
      {isLoading ?
        (<Loader></Loader>)
        : error ?
          (<Message variant='danger'>{error?.data?.message || error?.error}</Message>)
          : (
            <>
              <Row>
                <Col md={5}>
                  <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={4}>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                    <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={3}>
                  <Card>
                    <ListGroup variant='flush'>
                      <ListGroup.Item>
                        <Row>
                          <Col>Price:</Col>
                          <Col>
                            <strong>${product.price}</strong>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>Status:</Col>
                          <Col>
                            {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      {/**Quantity field - added later */}
                      {
                        product.countInStock > 0 && 
                        (
                          <ListGroup.Item>
                            <Row>
                              <Col>Qty</Col>
                              <Col>
                                <Form.Control
                                  value={qty}
                                  onChange={(e)=>setQty(Number(e.target.value))}
                                  as='select'>
                                    {[...Array(product.countInStock).keys()].map(
                                      (x) => (
                                        <option key={x+1} value={x+1}>
                                          {x+1}
                                        </option>
                                      )
                                    )
                                    }
                                </Form.Control>
                              </Col>
                            </Row>
                          </ListGroup.Item>
                        )
                      }
                      <ListGroup.Item>{/** disable the add to cart to button if not in stock */}
                        <Button
                          className='btn-block'
                          type='button'
                          onClick={addToCartHandler}
                          disabled={product.countInStock === 0}
                        >
                          Add To Cart
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
            </>)}
    </>
  )

};

export default ProductScreen;