
interface ContentWrapperProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  className, children
}) => {
  return <div className={`content-wrapper ${className ? className : ""}`}></div>;
}

export default ContentWrapper;