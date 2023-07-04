
 const Header = ({title}) => {
  return (
    <div className="header">{title}</div>
  )
}
Header.defaultProps ={
    title:"to do List"
}

export default Header