import React from 'react'
import { motion } from 'framer-motion';

const IconCircleMotion = ({icons}) => {
  const currentIcons = [icons]; // 5 icons
  const radius = 180; // radius of the circle
  const centerX = 0; // center x-coordinate
  const centerY = 0; // center y-coordinate
  const angleIncrement = (Math.PI * 2) / icons.length;
  return (
    <div className="icon-circle">
    {currentIcons.map((icon, index) => {
      const angle = index * angleIncrement;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      console.log(icon)

      return (
        <motion.div
          key={icon.type}
          initial={{ x, y }}
          animate={{
            x: [x, x + 20, x],
            y: [y, y + 20, y],
            rotate: [0, 360],
            transition: { duration: 5, repeat: Infinity }
          }}
        >
          {icon}
        </motion.div>
      );
    })}
  </div>
  )
}

export default IconCircleMotion
