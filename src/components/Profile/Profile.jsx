import "./profile.css"
import Posts from "../Posts/Posts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className="profile">
            <ProfileInfo />
            <Posts />
        </div>
    )
}

export default Profile;