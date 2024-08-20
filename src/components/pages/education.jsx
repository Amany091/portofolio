import React, { useEffect, useState } from 'react'
import ThemeContext from '../../context/theme'
import { useContext } from 'react'
import { motion } from 'framer-motion'

const Education = () => {
    const { theme } = useContext(ThemeContext)
    const [screenWidth,setScreenWidth ] = useState(null)

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
            className='container my-5 p-2 user_education ' id='education'
            whileInView={{ opacity: 1, y: 0 }}
                initial={{opacity:0, y: -50}}
                transition={{ duration: 2 }}
        >
            <h1 style={textStyle} className='text-center' >Education</h1>
            <motion.div
                className={`user_edu p-1 my-3 rounded w-sm-100 m-auto ${screenWidth <= 800 ? 'w-100':'w-75'}`}
                whileHover={
                    theme === 'light' ? 
                        { scale: 1.01, transition: { duration: 0.2 }, backgroundImage: 'linear-gradient(90deg, #25213b 20%, #8b5cf6 52% , #25213b 81%) !important' , boxShadow: '0px 0px 8px rgb(228, 148, 148)' }
                        :
                        { scale: 1.01, transition: { duration: 0.2 }, backgroundImage: 'linear-gradient(90deg, #25213b 20%, #8b5cf6 52% , #25213b 81%) !important' , boxShadow: '0px 0px 8px rgb(228, 148, 148)' }
                }
            >
                    <div className={` p-2`} style={theme == 'light' ? {backgroundColor: '#604777'} : {backgroundColor: '#dee2e6'}}>
                        <h4 style={textStyle}>Bachelor of Computer And Information </h4>
                        <p className="edu_delay" style={theme == 'light' ? { color: '#d5cdcd' } : { color: '#646262' }} >2019-2023</p>
                        <p className="edu_experience" style={theme == 'light' ? { color: '#d5cdcd' } : { color: '#646262' }}>
                            I have gained substantial knowledge in software development , algorithm and data structure, additionaly i have worked on team projects.
                        </p>
                    </div>
                </motion.div>
            
        </motion.div>
    )
}

export default Education
