import React, { useEffect, useState } from 'react'
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { motion } from 'framer-motion';
import { useContext } from 'react';
import ThemeContext from '../context/theme';

const TopIcon = () => {
    const { theme } = useContext(ThemeContext)
    const [showIcon, setShowIcon] = useState(false)
    const iconMotion = {
        initial: { y: -3 },
        animate: {
            y: [3, -3],
            transition: {
                y: {
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'linear'
                }
            }
        },
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setShowIcon(true)
            } else {
                setShowIcon(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleIconToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            {showIcon && (
                <motion.div
                    variants={iconMotion}
                    initial="initial"
                    animate="animate"
                    className='position-fixed end-0 me-5'
                    style={{bottom:'40px', cursor:'pointer'}}
                    onClick={handleIconToTop}
                >
                    <BiSolidUpArrowCircle size={40} color={theme == 'light' ? '#fff' : '#883355'} />
                </motion.div>
            )}
        </>
    )
}

export default TopIcon
