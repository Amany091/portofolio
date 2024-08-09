import React, { useState, useEffect, useDeferredValue } from 'react'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import ThemeContext from '../../context/theme'
import { Button, Carousel } from 'react-bootstrap'
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoGithub, BiLogoReact, BiLogoBootstrap } from 'react-icons/bi'
import { FaEye } from "react-icons/fa";

const Projects = () => {
    const { theme } = useContext(ThemeContext)
    const [language, setLanguage] = useState(null)
    const [screenWidth, setScreenWidth] = useState(null)

    const textStyle = {
        color: theme === 'light' ? '#f2f2f2' : '#000'
    }

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })

    return (
        <motion.div
            className='user_projects'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1.5 }}
            id='projects'
        >
            <h1 style={textStyle} className='text-center'>Projects</h1>
            <div className="container">
                <div className="pro_tab w-25 d-flex mx-auto justify-content-evenly my-3">
                    <motion.button
                        id='javascript'
                        style={{ backgroundColor: 'transparent', border: 'none', color: language == 'javascript' ? 'rgb(228, 148, 148)' : '#c2c2c2' }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.3 },
                        }}
                        onClick={() => setLanguage('javascript')}
                    >Javascript</motion.button>
                    <motion.button
                        id='react'
                        style={{ backgroundColor: 'transparent', border: 'none', color: language == 'react' ? 'rgb(228, 148, 148)' : '#c2c2c2' }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.3 },
                        }}
                        onClick={() => setLanguage('react')}
                    >React</motion.button>
                </div>
                <div id="javascript_projects" className={`${language == 'javascript' ? 'd-block' : 'd-none'}`} >
                    <div className='m-5'>
                        <Carousel interval={10000} >
                            <Carousel.Item id='todo-list_project'>
                                <div
                                    id="todo_project "
                                    className={`mx-auto w-75 ${screenWidth <= 800 ? 'w-100' : 'w-75'} rounded p-2`}
                                    style={theme == 'light' ? { backgroundColor: '#140225' } : { backgroundColor: '#dee2e6' }}
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
                            </Carousel.Item>
                            <Carousel.Item id='todo-list_project'>
                                <div
                                    id="todo_project "
                                    className={`mx-auto ${screenWidth <= 800 ? 'w-100' : 'w-75'} rounded p-2 `}
                                    style={theme == 'light' ? { backgroundColor: '#140225' } : { backgroundColor: '#dee2e6' }}
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
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <div id="react_projects" className={`${language == 'react' ? 'd-block' : 'd-none'}`} >
                    <div className="m-5">
                        <Carousel interval={10000} >
                            <Carousel.Item id='millionare-game' >
                                <div
                                    className={`mx-auto ${screenWidth <= 800 ? 'w-100' : 'w-75'} rounded p-2`}
                                    style={theme == 'light' ? { backgroundColor: '#140225' } : { backgroundColor: '#dee2e6' }}
                                >
                                    <div className="project_perview d-flex justify-content-between align-items-baseline  my-2">
                                        <h4 style={textStyle}>Millonare Game</h4>
                                        <div className="project_links">
                                            <Button
                                                href='https://github.com/Amany091/millionaire-game'
                                                style={{ ...textStyle, backgroundColor: 'transparent', border: 'none' }}
                                            ><BiLogoGithub size={20} /> code</Button>
                                            <Button
                                                href='https://millionaire-game-31df.vercel.app/'
                                                style={{ ...textStyle, backgroundColor: 'transparent', border: 'none' }}

                                            ><FaEye size={20} /> live</Button>
                                        </div>
                                    </div>
                                    <p style={theme == 'light' ? { color: '#d5cdcd' } : { color: '#646262' }}>
                                        Do you love the millionare game ? let's play
                                    </p>
                                    <div className="project_tools d-flex">
                                        <BiLogoReact size={30} className='text-primary' /> <BiLogoCss3 size={30} color='blue' /> <BiLogoBootstrap size={30} className='text-primary' />
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item id='millionare-game' >
                                <div
                                    className={`mx-auto ${screenWidth <= 800 ? 'w-100' : 'w-75'} rounded p-2`}
                                    style={theme == 'light' ? { backgroundColor: '#140225' } : { backgroundColor: '#dee2e6' }}
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
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects
