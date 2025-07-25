import React from "react";
import "./posts.css"
import Post from "../Post/Post";

let postText = React.createRef()


function Posts(props) {
    let addPost = () => {
        props.addPost(postText.current.value)
        postText.current.value = ""
    }
    let onPostChange = () => {
        props.onPostChange(postText.current.value)
    }

    return (

        <div className="posts">
            <input onChange={onPostChange} type="text" value={props.newPostText} ref={postText} placeholder="enter the post" />
            <button onClick={addPost}>add post</button>
            {props.postsText.map(e => <Post message={e.message} name={e.name} id={e.id} likes={e.likes} />)}
        </div>
    )
}

export default Posts;       