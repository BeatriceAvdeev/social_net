import "./posts.css"
import Post from "../Post/Post";

function Posts() {
    return (

        <div className="posts">
            <input type="text" placeholder="enter the post" />
            <button>add post</button>
            <Post message="hello world" name='John Dow' />
            <Post message="i am cat" name="John Dow" />
            <Post message='lets sing' name='John Dow' />
        </div>
    )
}

export default Posts;       