import "./style.scss";

import React from "react";

interface ContentWrapperProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  onMouseDown?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLDivElement>) => void;
  setShowId: (e: number) => void;
  id: number;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  className, children, onMouseDown, onMouseMove, onMouseUp, setShowId, id
}) => {
  const dragging = React.useRef(false);
  const moveCoorX = React.useRef(0);

  return <div onMouseDown={(e) => {
    dragging.current = true;
    moveCoorX.current = e.clientX;
  }}
    onMouseMove={(e) => {
      if (dragging.current == true) {
        const currentX = e.clientX;
        const deltaX = moveCoorX.current - currentX;

        if (deltaX >= 300) {
          setShowId(id);
          dragging.current = false;
        }
      }
    }}
    onMouseUp={(e) => dragging.current = false} className={`content-wrapper ${className ? className : ""}`}>
    {children}
  </div>;
}

export default ContentWrapper;