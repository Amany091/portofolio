import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import ThemeContext from '../../context/theme'
import { Button, Carousel } from 'react-bootstrap'
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoGithub, BiLogoReact, BiLogoBootstrap } from 'react-icons/bi'
import { FaEye } from "react-icons/fa";


const Projects = () => {
    const { theme } = useContext(ThemeContext)
    const textStyle = {
        color: theme === 'light' ? '#f2f2f2' : '#000'
    }

    return (
        <motion.section
            className='user_projects p-2'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.5 }}
            id='projects'
        >
            <div className='container'>
                <h1 style={textStyle} className='text-center my-4'>Projects</h1>
                <div id="front-end_projects" className=' row gap-2 justify-content-center'  >
                    <div
                        id="todo_project "
                        className='rounded  p-2 col-lg-6 col-md-6 col-sm-12 '
                        style={theme == 'light' ? { backgroundColor: '#604777' } : { backgroundColor: '#dee2e6' }}
                    >
                        <div className="project_perview d-flex justify-content-between align-items-baseline ">
                            <h4 style={textStyle}>ToDo List</h4>
                            <div className="project_links">
                                <Button
                                    href='https://github.com/Amany091/todo-list'
                                    style={{ ...textStyle, backgroundColor: 'transparent', border: 'none' }}
                                ><BiLogoGithub size={20} /> code</Button>
                                <Button
                                    href='https://todo-list-xi-teal-18.vercel.app/'
                                    style={{ ...textStyle, backgroundColor: 'transparent', border: 'none' }}

                                ><FaEye size={20} /> live</Button>
                            </div>
                        </div>
                        <p style={theme == 'light' ? { color: '#d5cdcd' } : { color: '#646262' }}>
                            This app helps you to create your own plans  and tasks for everyday life, it is built with HTML, CSS, and JavaScript. It allows users to add tasks , delete , filter a task as completed or still pending, edit , complete and search for one.</p>
                        <div className="project_tools d-flex">
                            <BiLogoCss3 style={{ color: 'blue', fontSize: '30px' }} /> <BiLogoHtml5 style={{ color: 'red', fontSize: '30px' }} className='mx-3' /> <BiLogoJavascript style={{ color: '#d0bc01', fontSize: '30px' }} /> <BiLogoTailwindCss className='text-primary ms-3 h3' />
                        </div>
                    </div>
                    <div
                        id="todo_project "
                        className='rounded  p-2 col-lg-6 col-md-6 col-sm-12'
                        style={theme == 'light' ? { backgroundColor: '#604777' } : { backgroundColor: '#dee2e6' }}
                    >
                        <div className="project_perview d-flex justify-content-between  align-items-baseline my-2">
                            <h4 style={textStyle}>E-Commerce website</h4>
                            <div className="project_links">
                                <Button
                                    href='https://github.com/Amany091/e-commerce'
                                    style={{ ...textStyle, backgroundColor: 'transparent', border: 'none' }}
                                ><BiLogoGithub size={20} /> code</Button>
                                <Button
                                    href='https://e-commerce-olive-sigma.vercel.app/'
                                    style={{ ...textStyle, backgroundColor: 'transparent', border: 'none' }}

                                ><FaEye size={20} /> live</Button>
                            </div>
                        </div>
                        <p style={theme == 'light' ? { color: '#d5cdcd' } : { color: '#646262' }}>
                            This project is an e-commerce website for selling food products. Key features include product listings, add-to-cart and remove-from-cart functionalities, and user authentication (sign-up and login). The sign-up and login functionalities are implemented without a backend, and the product data is managed using JSON Server. The project is built using JavaScript and is fully responsive.
                        </p>
                        <div className="project_tools d-flex">
                            <BiLogoCss3 style={{ color: 'blue', fontSize: '30px' }} /> <BiLogoHtml5 style={{ color: 'red', fontSize: '30px' }} className='mx-3' /> <BiLogoJavascript style={{ color: '#d0bc01', fontSize: '30px' }} />
                        </div>
                    </div>
                    <div
                        className='rounded p-2  col-lg-6 col-md-6 col-sm-12'
                        style={theme == 'light' ? { backgroundColor: '#604777' } : { backgroundColor: '#dee2e6' }}
                    >
                        <div className="project_perview d-flex justify-content-between align-items-baseline  my-2">
                            <h4 style={textStyle}>Workout timer</h4>
                            <div className="project_links">
                                <Button
                                    href='https://github.com/Amany091/workout-timer'
                                    style={{ ...textStyle, backgroundColor: 'transparent', border: 'none' }}
                                ><BiLogoGithub size={20} /> code</Button>
                                <Button
                                    href='https://workout-timer-alpha.vercel.app/'
                                    style={{ ...textStyle, backgroundColor: 'transparent', border: 'none' }}

                                ><FaEye size={20} /> live</Button>
                            </div>
                        </div>
                        <p style={theme == 'light' ? { color: '#d5cdcd' } : { color: '#646262' }}>
                            A simple application built with React that displays your to-do list and includes a countdown timer for each task. It utilizes hooks like useState, useRef, and useEffect.
                        </p>
                        <div className="project_tools d-flex">
                            <BiLogoReact size={30} className='text-primary' /> <BiLogoCss3 size={30} color='blue' /> <BiLogoBootstrap size={30} className='text-primary' />
                        </div>
                    </div>
                </div>
                <button className="btn mx-auto d-block my-4 " >
                    <a href="https://github.com/Amany091?tab=repositories" className='text-decoration-none ' style={textStyle} target="_blank">See More</a>
                </button>
            </div>
        </motion.section>
    )
}

export default Projects
