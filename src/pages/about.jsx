import React, { useContext } from 'react'
import ThemeContext from '../context/theme'
import { Button } from 'react-bootstrap'

const About = () => {
  const { theme } = useContext(ThemeContext)
  
  const textStyle = {
    color: theme === 'light' ? '#f2f2f2' : '#000',
  }

  const themeButton = {
    backgroundImage: theme === 'light' ? 'linear-gradient(90deg, rgb(84 14 131) 0%, rgb(98, 53, 98) 50%, rgb(5, 68, 145) 100%)' : 'linear-gradient(85deg, rgb(225 215 232) 0%, rgb(228 148 148) 50%, rgb(210 106 126) 100%)'
  }

  return (
    <div className='d-flex justify-content-center flex-column align-content-center align-items-center mt-4' id='about'>
      <h1 className='mb-2' style={textStyle}>About Me</h1>
      <p className=' w-75 text-center' style={theme == 'light' ? { color: '#d5cdcd' } : { color: '#646262' }} >I am a junior Front_End developer , I have a bachor's degree of Computer Science at Information Technology department where i gained a solid information of computer science and software engineering. My passion for web development was started by the positive feedback i received on my projects during my time at university, i have problem solving skills and algorithm  </p>
      <p className="w-75 text-center" style={theme == 'light' ? { color: '#d5cdcd' } : { color: '#646262' }}>
      I have an interest in designing e-commerce websites, focusing on creative UI and UX. I strive to deliver good user interfaces and performance. I am constantly seeking to expand my knowledge and skills to stay current with the latest updates , i always strive to elevate my designing and coding skills to the highest level
      </p>
      <Button href='#contact' className='contact w-25' style={{...themeButton, border:'none'}} >Contact Me</Button>
    </div>
  )
}

export default About
