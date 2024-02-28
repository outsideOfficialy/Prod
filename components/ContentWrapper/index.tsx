import "./style.scss";

interface ContentWrapperProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  onMouseDown?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  className, children, onMouseDown, onMouseMove, onMouseUp
}) => {
  return <div onMouseUp={onMouseUp} onMouseDown={onMouseDown} onMouseMove={onMouseMove} className={`content-wrapper ${className ? className : ""}`}>
    {children}
  </div>;
}

export default ContentWrapper;