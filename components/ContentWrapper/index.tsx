import "./style.scss";

import React from "react";
import { motion } from "framer-motion";

interface ContentWrapperProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  setShowId?: (e: number | null) => void;
  id?: number;
  animationDelay?: number;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  className,
  children,
  setShowId,
  id,
  animationDelay = 0.5
}) => {
  const dragging = React.useRef(false);
  const moveCoorX = React.useRef(0);

  return <motion.div
    initial={{ opacity: 0, translateY: -50 }}
    whileInView={{ opacity: 1, translateY: 0 }}
    transition={{ duration: .3, delay: animationDelay }}
    viewport={{ once: true }}
    onMouseDown={(e) => {
      if (!setShowId || !id) return;
      dragging.current = true;
      moveCoorX.current = e.clientX;
    }}
    onMouseMove={(e) => {
      if (!setShowId || !id) return;
      if (dragging.current == true) {
        const currentX = e.clientX;
        const deltaX = moveCoorX.current - currentX;

          if (deltaX >= -300) {
            setShowId(id);
            dragging.current = false;
            setTimeout(() => setShowId(null), 3000);
          }
        }
      }}
      onMouseUp={(e) => (dragging.current = false)}
      className={`content-wrapper ${className ? className : ""}`}
    >
      {children}
    </motion.div>
};

export default ContentWrapper;
