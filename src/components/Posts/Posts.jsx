import React from "react";
import "./posts.css"
import Post from "../Post/Post";
let postText=React.createRef()
let addPost = () => {
    console.log(postText)
}

function Posts(props) {
    return (

        <div className="posts">
            <input type="text" ref={postText} placeholder="enter the post" />
            <button onClick={addPost}>add post</button>
            {props.postsText.map(e => <Post message={e.message} name={e.name} id={e.id} />)}
        </div>
    )
}

export default Posts;       