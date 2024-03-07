import React from "react";

interface ContentWrapperSkeletonProps {
  isShown: boolean;
  transition: number;
  children: React.ReactNode | React.ReactNode[];
}

const ContentWrapperSkeleton: React.FC<ContentWrapperSkeletonProps> = ({
  isShown, transition, children
}) => {

  return <>
    {children}
    <ContentWrapperSkeletonBlock isShown={isShown} transition={transition} />
    <ContentWrapperSkeletonBlock isShown={isShown} transition={transition} />
  </>;
}

const ContentWrapperSkeletonBlock: React.FC<{ isShown: boolean, transition: number }> = ({
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
      <div style={{ transition: `${transition}ms` }} className={`content-wrapper-skeleton ${isShown ? "visible" : ""}`}>
        <div></div>
      </div>
    }
  </>
}

export default ContentWrapperSkeleton;