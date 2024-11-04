import React,{useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import ThemeContext from '../context/theme'
import { useContext } from 'react'
import { BiEdit, BiImage } from 'react-icons/bi'
import { FaPercent } from 'react-icons/fa'

const Services = () => {
    const { theme } = useContext(ThemeContext);
    const [screenWidth, setScreenWidth] = useState(null)

    const bgTheme = {
        backgroundImage: theme === 'light' ? 'linear-gradient(90deg, rgb(106 94 114) 0%, rgb(118 69 118) 50%)' : 'linear-gradient(85deg, rgb(228 154 154) 0%, rgb(228, 148, 148) 50%, rgb(210, 106, 126) 100%)'
    }



    const textStyle = {
        color: theme === 'light' ? '#f2f2f2' : '#000'
    }

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return ()=> window.removeEventListener('resize',handleResize)
    })
    
    return (
        <div className="container my-3 user_services " id='services'>
            <h1 className="text-center mb-3" style={textStyle}>Services</h1>
            <motion.div
                className='row'
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    style={bgTheme} className={`rounded col-lg-3 col-md-3 col-sm-12 text-center my-3 ${screenWidth> 800 ? 'w-25':''} `}
                    whileHover={
                        {boxShadow: '0px 0px 10px rgb(228, 148, 148)', transition:{duration: .3} }
                    }
                >
                    <BiEdit size={30} className='my-2' style={textStyle}/>
                    <p style={theme == 'light' ? { color: '#d5cdcd' } : { color: '#f2f2f2' }}>
                        Can edit your current website
                    </p>
                </motion.div>
                <motion.div
                    style={bgTheme} className={`rounded col-lg-3 col-md-3 col-sm-12 text-center my-3 mx-2 ${screenWidth> 800 ? 'w-25':''} `}
                    whileHover={
                        {boxShadow:'0px 0px 8px rgb(228, 148, 148)', transition:{duration: .3} }
                    }
                >
                    <BiImage size={30} className='my-2' style={textStyle}/>
                    <p style={theme == 'light' ? { color: '#d5cdcd' } : { color: '#f2f2f2' }}>
                        Design a website from scratch wireframe, UI and coding using language you prefer.
                    </p>
                </motion.div>
                <motion.div
                    style={bgTheme} className={`rounded col-lg-3 col-md-3 col-sm-12  text-center my-3 ${screenWidth> 800 ? 'w-25':''} `}
                    whileHover={
                        {boxShadow:'0px 0px 10px rgb(228, 148, 148)', transition:{duration: .3} }
                    }
                >
                    <FaPercent size={30} className='my-2' style={textStyle}/>
                    <p style={theme == 'light' ? { color: '#d5cdcd' } : { color: '#f2f2f2' }}>
                    Make your wesite a  responsive website, with all devices.
                    </p>
                </motion.div>
            </motion.div>
            
        </div>
    )
}

export default Services
