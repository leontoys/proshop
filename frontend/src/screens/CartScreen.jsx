import React from 'react'
import { Row, Col, ListGroup, Image, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Message from '../components/Message'
import { FaTrash } from 'react-icons/fa'
import { addToCart, removeFromCart } from '../slices/cartSlice'

const CartScreen = () => {
    console.log('---cart screen---')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //read cart items from redux store
    const cart = useSelector((state)=>state.cart)
    console.log("cart",cart)
    const {cartItems} = cart
    console.log("cart items",cartItems)

    const addToCartHandler = async(product,qty)=>{
        //dispatch action
        dispatch(addToCart({...product,qty}))
    }

    const removeFromCartHandler = async(id)=>{
        dispatch(removeFromCart(id))
    }   

  return (
    <Row>
        <Col md={8}>
            <h1 style={{marginBottom:'20px'}}>Shopping Cart</h1>
            {cartItems.length === 0?
            (<Message>
                Your cart is empty <Link to='/'>Go Back</Link>
            </Message>) : 
            (<ListGroup>
                {cartItems.map((item)=>{
                    return (<ListGroup.Item key={item._id}>
                        <Row>
                            <Col md={2}>
                                <Image src={item.image} fluid rounded></Image>
                            </Col>
                            <Col md={3}>
                                <Link to={`/product/${item._id}`}>{item.name}</Link>
                            </Col>
                            <Col md={2}>
                                ${item.price}
                            </Col>
                            <Col md={2}>
                            <Form.Control
                                  value={item.qty}
                                  onChange={(e)=>{
                                    e.preventDefault()
                                    addToCartHandler(item,Number(e.target.value))
                                  }}
                                  as='select'>
                                    {[...Array(item.countInStock).keys()].map(
                                      (x) => (
                                        <option key={x+1} value={x+1}>
                                          {x+1}
                                        </option>
                                      )
                                    )
                                    }
                                </Form.Control>
                            </Col>
                            <Col md={2}>
                                <Button 
                                    disabled={cartItems.length===0}
                                    onClick={(e)=>{
                                        e.preventDefault()
                                        removeFromCartHandler(item._id)
                                    }}
                                    variant='dark'>
                                    <FaTrash></FaTrash>
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>)
                })
                }
            </ListGroup>)}
        </Col>
        <Col md={4}>
        </Col>
    </Row>
  )
}

export default CartScreen