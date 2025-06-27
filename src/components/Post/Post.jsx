import "./post.css"
import ava from "../../img/cat.png"

function Post (props){
    return(
         <div className="post">
                <img src={ava} alt="" />
                <span>{props.name}</span>
                <p>{props.message}</p>
                <p className="likes">likes: {props.likes}</p>
            </div>
    )
}

export default Post;