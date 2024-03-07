import React from "react";

const ContentWrapperSkeleton: React.FC<{ isShown: boolean, transition: number }> = ({
  isShown, transition
}) => {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    if (isShown === false) {
      setTimeout(() => {
        setShow(false);
      }, 500);
    }
  }, [isShown]);

  return <>
    {show &&
      <div style={{transition: `${transition}ms`}} className={`content-wrapper-skeleton ${isShown ? "visible" : ""}`}>
        <div></div>
      </div>
    }
  </>
}

export default ContentWrapperSkeleton;