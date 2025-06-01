import "./navBar.css"

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <li className="nav-item">
                    <a href="">profile</a>
                </li>
                <li className="nav-item">
                    <a href="">messages</a>
                </li>
                <li className="nav-item">
                    <a href="">users</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;