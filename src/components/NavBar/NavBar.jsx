import { NavLink } from "react-router";
import "./navBar.css"

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <li className="nav-item">
                    <NavLink to="/profile">profile</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/messages">messages</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="">users</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;