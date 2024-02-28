import { motion } from "framer-motion";
import React from "react";



const UnderlinedTitle: React.FC<{ title: string }> = ({
  title
}) => {
  return <motion.h3
    initial={{ opacity: 0, translateY: -50 }}
    whileInView={{ opacity: 1, translateY: 0 }}
    transition={{ duration: .3, delay: .5 }}
    viewport={{ once: true }}
    className="underlined-title">
    {title}
    <motion.hr
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 3, delay: .5 }}
    />
  </motion.h3>;
}

export default UnderlinedTitle;