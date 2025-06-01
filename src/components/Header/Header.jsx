import header from "./img/logo.png"
import "./header.css"

function Header(){
  return (
    <div className="header">
      <img className="logo" src={header} alt="" />
    </div>
  )
 }

 export default Header;