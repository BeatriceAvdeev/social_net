import "./post.css"
import ava from "../../img/cat.png"

function Post (){
    return(
         <div className="post">
                <img src={ava} alt="" />
                <span>John Dow</span>
                <p>some text</p>
            </div>
    )
}

export default Post;