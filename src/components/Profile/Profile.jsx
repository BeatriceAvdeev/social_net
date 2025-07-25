import "./profile.css"
import Posts from "../Posts/Posts";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className="profile">
            <ProfileInfo />
            <Posts postsText={props.profilePage.postsText} addPost={props.addPost} newPostText={props.profilePage.newPostText} onPostChange={props.onPostChange} />
        </div>
    )
}

export default Profile;