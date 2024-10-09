import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { BiLogoGmail, BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { useContext } from 'react';
import ThemeContext from '../../context/theme'
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Client from '../../context/client';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef()
    const { theme } = useContext(ThemeContext)
    const { setClientMail, clientMail } = useContext(Client)
    const { register, formState, watch, reset, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm({
        mode: 'onChange',
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })


    const themeButton = {
        backgroundImage: theme === 'light' ? 'linear-gradient(90deg, rgb(84 14 131) 0%, rgb(98, 53, 98) 50%, rgb(5, 68, 145) 100%)' : 'linear-gradient(85deg, rgb(225 215 232) 0%, rgb(228 148 148) 50%, rgb(210 106 126) 100%)'
    }

    useEffect(() => {
        if (isSubmitSuccessful) reset()
    }, [isSubmitSuccessful, reset])

    const handleSubmiting = (client) => {
        setClientMail(client)
        emailjs
            .send('service_9ww10hq', 'template_g5l354j', client, 'PXP5u0Z_X6qJzUVeK')
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    toast.success(response.text)
                },
                (error) => {
                    console.log('FAILED...', error);
                    toast.error(error.text)
                },
            );
    };



    const textStyle = {
        color: theme === 'light' ? '#f2f2f2' : '#000'
    }
    return (
        <div className='container my-5' id='contact'>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 rounded p-2 d-flex flex-column justify-content-center">
                    <div className="gmail p-1 mb-2 d-flex ">
                        <motion.div
                            className='rounded-circle p-1'
                            whileHover={
                                { scale: 1.1, transition: { duration: 1.5 }, boxShadow: '0px 0px 10px red' }
                            }
                        >
                            <BiLogoGmail size={30} color="red" />
                        </motion.div>
                        <Button
                            style={{ ...textStyle, backgroundColor: 'transparent', border: 'none' }}
                            href='mailto:amanyzeyada10@gmail.com' target='_blank'
                            rel='noopener noreferrer'
                        >amanyzeyada10@gmail.com</Button>
                    </div>
                    <div className="linkedin p-1 mb-2 d-flex ">
                        <motion.div
                            className='rounded-circle p-1'
                            whileHover={
                                { scale: 1.1, transition: { duration: 1.5 }, boxShadow: '0px 0px 10px blue' }
                            }
                        >
                            <BiLogoLinkedin size={30} className='text-primary' />
                        </motion.div>
                        <Button
                            style={{ ...textStyle, backgroundColor: 'transparent', border: 'none' }}
                            href='https://www.linkedin.com/in/amany-mhmd11'
                        >My LinkedIn Profile</Button>
                    </div>
                    <div className="facebook p-1 mb-2 d-flex ">
                        <motion.div
                            className='rounded-circle p-1'
                            whileHover={
                                { scale: 1.1, transition: { duration: 1.5 }, boxShadow: '0px 0px 10px blue' }
                            }>
                            <BiLogoFacebook size={30} className='text-primary' />
                        </motion.div>
                        <Button
                            style={{ ...textStyle, backgroundColor: 'transparent', border: 'none' }}
                            href='https://facebook.com/AMhmd901'
                        >My Facebook Profile</Button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 rounded">
                    <h5 style={textStyle} >Feel free to contact me any time. i will respond as soon as possible.</h5>
                    <Form onSubmit={handleSubmit(handleSubmiting)} ref={formRef} >
                        <Form.Group controlId="formBasicName">
                            <Form.Label style={textStyle}>Your Name</Form.Label>
                            <Form.Control
                                type='text'
                                name='clientName'
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Please enter your name',
                                    }
                                })}
                                className={errors.name ? 'is-invalid' : ''}
                            />
                            <Form.Control.Feedback type='invalid' >{errors.name?.message}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" className='my-2'>
                            <Form.Label style={textStyle}>Email address</Form.Label>
                            <Form.Control
                                type='email'
                                name='clientEmail'
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Please enter your email',
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9]+@gmail\.com$/,
                                        message: 'Invalid Email Address'
                                    }
                                })}
                                className={errors.email ? 'is-invalid' : ''}
                            />
                            <Form.Control.Feedback type='invalid'> {errors.email?.message} </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formBasicMessage">
                            <Form.Label style={textStyle}>Leave Your Message</Form.Label>
                            <Form.Control
                                as='textarea' rows={3}
                                type='text'
                                name='clientMessage'
                                {...register('message', {
                                    required: {
                                        value: true,
                                        message: 'Please enter your message',
                                    }
                                })}
                                className={errors.message ? 'is-invalid' : ''}
                            />
                            <Form.Control.Feedback type='invalid' >{errors.message?.message}</Form.Control.Feedback>
                        </Form.Group>
                        <Button className='w-50 my-4' type='submit' style={{ ...themeButton, border: 'none' }} onClick={handleSubmit((data,) => handleSubmiting(data))} >Send</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Contact
