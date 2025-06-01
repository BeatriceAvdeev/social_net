import "./posts.css"
import Post from "../Post/Post";

function Posts() {
    return (

        <div className="posts">
            <input type="text" placeholder="enter the post" />
            <button>add post</button>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts;