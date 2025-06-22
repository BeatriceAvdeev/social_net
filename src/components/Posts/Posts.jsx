import "./posts.css"
import Post from "../Post/Post";


function Posts(props) {
    return (

        <div className="posts">
            <input type="text" placeholder="enter the post" />
            <button>add post</button>
            {props.postsText.map(e => <Post message={e.message} name={e.name} id={e.id} />)}
        </div>
    )
}

export default Posts;       