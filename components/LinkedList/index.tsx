const LinkedList: React.FC<{
  className?: string;
  links?: { title: string, link: string }[]
}> = ({ className, links }) => {

  return <ul className={className ? className : ""}>
    {links ? links.map((el, idx) => <li key={idx}>
      <a href="#">{el.title}</a>
    </li>) : null}
  </ul>;
}

export default LinkedList;