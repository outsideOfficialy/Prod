import { motion } from "framer-motion";
import React from "react";

interface UnderlinedTitleProps {
  title: string;
  subtitle?: boolean;
  animationDelay?: number;
}

const UnderlinedTitle: React.FC<UnderlinedTitleProps> = ({
  title, subtitle = false
}) => {
  return <motion.h3
    initial={{ opacity: 0, translateY: -50 }}
    whileInView={{ opacity: 1, translateY: 0 }}
    transition={{ duration: .3, delay: 0.5 }}
    viewport={{ once: true }}
    className={`underlined-${subtitle ? "subtitle" : "title"}`}>
    {title}
    <motion.hr
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: .3, delay: 0.8 }}
    />
  </motion.h3>;
}

export default UnderlinedTitle;