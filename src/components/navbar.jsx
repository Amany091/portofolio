import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import ThemeContext from '../context/theme';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Navbaar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const textStyle = {
    color: theme === 'light' ? '#c2c2c2' : '#000',
  }

  return (
    <div className='d-flex justify-content-between align-items-baseline container-fluid'>
      <Navbar expand='lg' className='w-100 align-items-baseline mb-3' >
        <div className=" d-flex justify-content-between w-100 me-2">
          <Navbar.Brand href="#about" style={textStyle}>Portfolio</Navbar.Brand>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav '
            className=' border-0 '
            style={theme == 'light' ? { backgroundColor: '#f2f2f2', outline: 'none' } : { backgroundColor: '#e6c7e3', outline: 'none' }}
          />
        </div>
        <Navbar.Collapse id='basic-navbar-nav' >
          <Nav className="ms-auto">
            <Nav.Link href='#about' style={textStyle}>
              <motion.p
                whileHover={
                  theme == 'light' ?
                    { scale: '1.01', transition: { duration: .2 }, color: '#f2f2f2' }
                    :
                    { scale: '1.01', transition: { duration: .2 }, color: '#835' }
                }
                style={textStyle}
              >About</motion.p>
            </Nav.Link>
            <Nav.Link href='#education' style={textStyle} >
              <motion.p
                whileHover={
                  theme == 'light' ?
                    { scale: '1.01', transition: { duration: .2 }, color: '#f2f2f2' }
                    :
                    { scale: '1.01', transition: { duration: .2 }, color: '#835' }
                }
                style={textStyle}
              >Education</motion.p>
            </Nav.Link>
            <Nav.Link href='#experience' style={textStyle} >
              <motion.p
                whileHover={
                  theme == 'light' ?
                    { scale: '1.01', transition: { duration: .2 }, color: '#f2f2f2' }
                    :
                    { scale: '1.01', transition: { duration: .2 }, color: '#835' }
                }
                style={textStyle}
              >Experience</motion.p>
            </Nav.Link>
            <Nav.Link href='#skills' style={textStyle}>
              <motion.p
                whileHover={
                  theme == 'light' ?
                    { scale: '1.01', transition: { duration: .2 }, color: '#f2f2f2' }
                    :
                    { scale: '1.01', transition: { duration: .2 }, color: '#835' }
                }
                style={textStyle}
              >Skills</motion.p>
            </Nav.Link>
            <Nav.Link href='#projects' style={textStyle} >
              <motion.p
                whileHover={
                  theme == 'light' ?
                    { scale: '1.01', transition: { duration: .2 }, color: '#f2f2f2' }
                    :
                    { scale: '1.01', transition: { duration: .2 }, color: '#835' }
                }
                style={textStyle}
              >Projects</motion.p>
            </Nav.Link>
            <Nav.Link href='#services' style={textStyle} >
              <motion.p
                whileHover={
                  theme == 'light' ?
                    { scale: '1.01', transition: { duration: .2 }, color: '#f2f2f2' }
                    :
                    { scale: '1.01', transition: { duration: .2 }, color: '#835' }
                }
                style={textStyle}
              >Services</motion.p>
            </Nav.Link>
            <Nav.Link href='#contact' style={textStyle} >
              <motion.p
                whileHover={
                  theme == 'light' ?
                    { scale: '1.01', transition: { duration: .2 }, color: '#f2f2f2' }
                    :
                    { scale: '1.01', transition: { duration: .2 }, color: '#835' }
                }
                style={textStyle}
              >Contact</motion.p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className='icon_theme ms-2 ' style={textStyle} onClick={handleToggleTheme} >
        {theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />}
      </div>
    </div>
  )
}

export default Navbaar
