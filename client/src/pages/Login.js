import React,{useState, useEffect} from 'react'
import {Form, Input, message} from 'antd'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

//import compLogo from '../components/assets/logo.jpg';

const Login = () => {
const [loading, setLoading] = useState(false)
const navigate = useNavigate()
       //form submit
       const submitHandler = async(values) =>{
        console.log(values);
        try {
            setLoading(true)
            const {data} = await axios.post('/api/v1/user/login', values)
            setLoading(false)
            message.success('login success')
            //setting the local storage with user details of login
            localStorage.setItem('user', JSON.stringify({...data, password:''}))
            navigate('/')
        } catch (error) {
            setLoading(false)
            message.error('something went wrong')
        }
    };

     //prevent for login user
    // if there is a user in local storage then navigte to home page
    useEffect(() => {
        if(localStorage.getItem('user')){
            navigate('/')
        }
    }, [navigate]);

  return (
    <>
        <div class="split left">
        <div class="centered">
            {/* <img src={compLogo} alt="Italian Trulli"/> */}
            
        </div>
        </div>
        <div class="split right">
            <div className='register-page'>
                
                <Form layout='vertical' onFinish={submitHandler}>
                    <h1>Welcome to Wall-E</h1>
                    <center><h2>Sign In</h2></center>
                    <Form.Item label='Email' name='email'>
                        <Input type='email'/>
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <Input type='password'/>
                    </Form.Item>
                    <div className='d-flex justify-content-between'>
                    <Link to="/register">Not a User ? Click Here to Register</Link> 
                        <button className='btn btn-primary'>Login</button>
                    </div>
                </Form>
            </div>
      </div>
    </>
  )
}

export default Login
