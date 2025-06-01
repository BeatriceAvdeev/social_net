import "./profile.css"
import ava from "./img/cat.png"

function Profile() {
    return (
        <div className="profile">
            <div className="me">
                <img src={ava} alt="" />
                <p>John Dow</p>
            </div>
            <div className="posts">
                <input type="text" placeholder="enter the post"/>
                <button>add post</button>
                <div className="post">
                    <img src={ava} alt="" />
                    <span>John Dow</span>
                    <p>some text</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;