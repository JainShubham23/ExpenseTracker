import React, { useState, useEffect } from 'react'
import { Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Register = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    //form submit
    const submitHandler = async (values) => {
        console.log(values);
        try {
            setLoading(true)
            await axios.post('/api/v1/user/register', values)
            message.success('Registration Successful')
            setLoading(false)
            navigate("/login");
        } catch (error) {
            setLoading(true)
            message.error("invalid username or password");
            setLoading(false)
        }
    };


    //prevent for login user
    // if there is a user in local storage then navigte to home page
    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/')
        }
    }, [navigate]);
    return (
        <>
            <div class="split left">   
            </div>
            <div class="split right">
                <div className='register-page'>
             
                    <Form layout='vertical' onFinish={submitHandler}>
                        <h1>Become a user</h1>
                        <Form.Item label='Name' name='name'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='Email' name='email'>
                            <Input type='email' />
                        </Form.Item>
                        <Form.Item label='Password' name='password'>
                            <Input type='password' />
                        </Form.Item>
                        <div className='d-flex justify-content-between'>
                            <Link to="/">Already Register ? Click Here to Login</Link>
                            <button className='btn btn-primary'>Register</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Register
