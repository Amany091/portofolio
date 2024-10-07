import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../../context/theme'
import { motion } from 'framer-motion'
import { BsGithub } from "react-icons/bs";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-bootstrap';

const textAnimate = (duration, delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1, x: 0, transition: {
      delay: delay,
      duration: duration
    }
  },

})

const iconsAnimate = (duration) => ({
  initial: { y: -3 },
  animate: {
    y: [3, -3],
    transition: {
      repeat: Infinity,
      duration: duration,
      ease: 'linear',
      repeatType: 'reverse'
    }
  },
})

const Cover = () => {
  const { theme } = useContext(ThemeContext)

  const textStyle = {
    color: theme === 'light' ? '#f2f2f2' : '#000',
  }

  const borderStyle = {
    border: theme === 'light' ? ' 4px solid #835' : '4px solid #3552'
  }

  const themeButton = {
    backgroundImage: theme === 'light' ? 'linear-gradient(90deg, rgb(84 14 131) 0%, rgb(98, 53, 98) 50%, rgb(5, 68, 145) 100%)' : 'linear-gradient(85deg, rgb(225 215 232) 0%, rgb(228 148 148) 50%, rgb(210 106 126) 100%)'
  }

  return (
    <div className='w-100 my-3 shadow-sm py-2'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className=" h-100 d-flex flex-column justify-content-center align-items-center ">
              <motion.h1
                className='text-center'
                variants={textAnimate(.9, .5)}
                initial="hidden"
                animate="visible"
                style={textStyle}
              >  I am Amany Mohamed</motion.h1>
              <motion.p
                className='job_field'
                variants={textAnimate(1.2, .6)}
                initial="hidden"
                animate="visible"
                style={textStyle}
              >
                Junior Front_End developer
              </motion.p>
              <div className="social_icons d-flex">
                <motion.div
                  className={`  text-center ${theme == 'light' ? 'text-light' : 'text-dark'} `}
                  variants={iconsAnimate(1.5)}
                  initial="initial"
                  animate="animate"
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                >
                  <NavLink href='https://github.com/Amany091' target='_blank'><BsGithub className='me-3' /></NavLink>
                </motion.div>
                <motion.div
                  className={` ${theme == 'light' ? 'text-light' : 'text-dark'} `}
                  variants={iconsAnimate(2)}
                  initial="initial"
                  animate="animate"
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                >
                  <NavLink href='https://www.linkedin.com/in/amany-mhmd11' target='_blank' ><BsLinkedin className='me-3' /></NavLink>
                </motion.div>
                <motion.div
                  className={`  text-center ${theme == 'light' ? 'text-light' : 'text-dark'} `}
                  variants={iconsAnimate(1.5)}
                  initial="initial"
                  animate="animate"
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                >
                  <NavLink href='https://facebook.com/AMhmd901' target='_blank'><BsFacebook className='me-3' /></NavLink>
                </motion.div>
              </div>
              <Button
                style={{...themeButton, border:'none'}}
                className='w-25 my-4 resume w-50'
                href={require('../../assets/docs/Amany_Mohamed_Resume.pdf')}
                download="Amany_Mohamed_Resume.pdf"
              > Download Resume </Button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className='person_bg rounded-pill border-4 mx-auto w-75 d-flex justify-content-center align-items-center' >
              <img src={require('../../assets/images/portfolio.jpg')} width={300} style={borderStyle} className='rounded-pill' alt="background" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cover
