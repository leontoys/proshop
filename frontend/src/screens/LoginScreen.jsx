import {useState,useEffect} from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from '../components/FormContainer';

const LoginScreen = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

  return (
    <FormContainer>
        <h1>Sign In</h1>
        <Form>
            <Form.Group className='my-2'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                >
                </Form.Control>
            </Form.Group>
            <Form.Group className='my-2'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>   
            <Button>Sign In</Button>         
        </Form>
    </FormContainer>
  )
}

export default LoginScreen