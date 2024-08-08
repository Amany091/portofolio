import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ThemeContext from '../../context/theme'
import { useContext } from 'react'


const Experience = () => {
    const { theme } = useContext(ThemeContext)
    const [screenWidth, setScreenWidth] = useState(null)
    const rotat = {
        initial: { x: 0, y: 0 },
        animate: {
            x: [1, -1, 1],
            y: [-1, 1, -1],
            rotate: [0, 360],
            transition: { duration: 5, repeat: Infinity }
        },
    }

    const textStyle = {
        color: theme === 'light' ? '#f2f2f2' : '#000'
    }

    useEffect(() => {
        const handleWidth = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWidth)
        return()=> window.removeEventListener('resize', handleWidth)
    }, [])

    return (
        <motion.div
            className='container my-5 p-2 user_experience ' id='experience'
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 2 }}
        >
            <h1 style={textStyle} className='text-center' >Experience</h1>
            <motion.div
                className={`user_edu p-1 my-3 rounded w-75 m-auto ${screenWidth <= 800 ? 'w-100':'w-75'}`}
                whileHover={
                    theme === 'light' ?
                        { scale: 1.01, transition: { duration: 0.2 }, backgroundImage: 'linear-gradient(90deg, #25213b 20%, #8b5cf6 52% , #25213b 81%) !important', boxShadow: '0px 0px 8px rgb(228, 148, 148)' }
                        :
                        { scale: 1.01, transition: { duration: 0.2 }, backgroundImage: 'linear-gradient(90deg, #25213b 20%, #8b5cf6 52% , #25213b 81%) !important', boxShadow: '0px 0px 8px rgb(228, 148, 148)' }
                }

            >
                <div className={` p-2`} style={theme == 'light' ? { backgroundColor: '#140225' } : { backgroundColor: '#dee2e6' }}>
                    <div className="d-flex justify-content-between px-2">
                        <h4 style={textStyle}>React Developer</h4>
                        <p className="edu_delay" style={theme == 'light' ? { color: '#d5cdcd' } : { color: '#646262' }} >25Apr-present</p>
                    </div>
                    <h6 style={textStyle}>Digital Egypt Pioneers Initiative - DEPI</h6>
                    <p className="edu_experience" style={theme == 'light' ? { color: '#d5cdcd' } : { color: '#646262' }}>
                        I've completed an internship where I gained a solid understanding of front-end development from scratch, including how it integrates with browsers. The experience was invaluable, strengthening my technical skills significantly. Additionally, I developed brilliant non-technical skills, including soft skills, freelance capabilities, and business English proficiency.
                    </p>
                </div>
            </motion.div>

        </motion.div>
    )
}

export default Experience
