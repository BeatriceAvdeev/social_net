import "./posts.css"
import Post from "../Post/Post";

let postsText=[
    {name:'John Dow',message:'hello world', id:1},
    {name:'John Dow',message:'i am cat', id:2},
    {name:'John Dow',message:'lets sing', id:3}
]
function Posts() {
    return (

        <div className="posts">
            <input type="text" placeholder="enter the post" />
            <button>add post</button>
            {postsText.map(e => <Post message={e.message} name={e.name} id={e.id} />)}
        </div>
    )
}

export default Posts;       