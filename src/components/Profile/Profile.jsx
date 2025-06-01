import "./profile.css"
import Posts from "../Posts/Posts";
import ava from "../../img/cat.png"

function Profile() {
    return (
        <div className="profile">
            <div className="me">
                <img src={ava} alt="" />
                <p>John Dow</p>
            </div>
            <Posts />
        </div>
    )
}

export default Profile;