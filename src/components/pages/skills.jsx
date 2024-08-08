import React from 'react'
import { BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoSass, BiLogoBootstrap } from "react-icons/bi";
import { motion } from 'framer-motion';
import ThemeContext from '../../context/theme';
import { useContext } from 'react';


const iconsAnimate = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      y: {
        repeat: Infinity,
        duration: duration,
        ease: 'linear',
        repeatType: 'reverse'
      },
    },
    
  },


})

const Skills = () => {
  const {theme} = useContext(ThemeContext)

  const textStyle = {
    color: theme === 'light' ? '#f2f2f2' : '#000'
  }
  
  return (
    <div className="user_skills" id='skills'>
      <h1 className="text-center my-4" style={textStyle}>Skills</h1>
    <div className='d-flex flex-wrap w-75 m-auto justify-content-evenly'>
      <motion.div
        className='react_icon text-primary px-4 d-flex justify-content-center align-items-center rounded my-2'
        style={{ fontSize: '50px', height:'64px'}}
        variants={iconsAnimate(1)}
        initial='initial'
        animate='animate'
        whileHover={
          { boxShadow: '0px 0px 8px #0d6efd' , transition:{duration: 2}}
        }
      > <BiLogoReact />
      </motion.div>
      <motion.div
        className='react_icon px-4 d-flex justify-content-center align-items-center rounded my-2'
        style={{ fontSize: '50px', height:'64px', color:'#d0bc01'}}
        variants={iconsAnimate(1)}
        initial='initial'
        animate='animate'
        whileHover={
          { boxShadow: '0px 0px 8px #d0bc01' , transition:{duration: 1}}
        }
      > <BiLogoJavascript />
      </motion.div>
      <motion.div
        className='react_icon px-4 d-flex justify-content-center align-items-center rounded my-2'
        style={{ fontSize: '50px', height:'64px', color:'blue'}}
        variants={iconsAnimate(1)}
        initial='initial'
        animate='animate'
        whileHover={
          { boxShadow: '0px 0px 8px #00f' , transition:{duration: 2.5}}
        }
      > <BiLogoCss3 />
      </motion.div>
      <motion.div
        className='react_icon px-4 d-flex justify-content-center align-items-center rounded my-2'
        style={{ fontSize: '50px', height:'64px', color:'red'}}
        variants={iconsAnimate(1)}
        initial='initial'
        animate='animate'
        whileHover={
          { boxShadow: '0px 0px 8px #ff0000' , transition:{duration: 1.5}}
        }
      > <BiLogoHtml5 />
      </motion.div>
      <motion.div
        className='react_icon  px-4 d-flex justify-content-center align-items-center rounded my-2'
        style={{ fontSize: '50px', height:'64px', color:'#f1959d'}}
        variants={iconsAnimate(1)}
        initial='initial'
        animate='animate'
        whileHover={
          { boxShadow: '0px 0px 8px #f1959d' , transition:{duration: .5}}
        }
      > <BiLogoSass />
      </motion.div>
      <motion.div
        className='react_icon text-primary px-4 d-flex justify-content-center align-items-center rounded my-2'
        style={{ fontSize: '50px', height:'64px'}}
        variants={iconsAnimate(1)}
        initial='initial'
        animate='animate'
        whileHover={
          { boxShadow: '0px 0px 8px #0d6efd' , transition:{duration: .5}}
        }
      > <BiLogoTailwindCss />
        </motion.div>
        <motion.div
        className='react_icon text-primary px-4 d-flex justify-content-center align-items-center rounded my-2'
        style={{ fontSize: '50px', height:'64px'}}
        variants={iconsAnimate(2)}
        initial='initial'
        animate='animate'
        whileHover={
          { boxShadow: '0px 0px 8px #0d6efd' , transition:{duration: .5}}
        }
      > <BiLogoBootstrap />
    </motion.div>
    </div >
    </div>
  )
}

export default Skills
