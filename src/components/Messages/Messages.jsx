import "./messages.css"
import Message from "../Message/Massage";
import { createRef } from "react";

let messageText = createRef()
function Messages(props) {
    let addMessage = () => {
        props.dispatch({type:"ADD-MESSAGE", text:messageText.current.value})
        messageText.current.value = ""
    }
    let onMessageChange = () => {
        props.dispatch({type:"MESSAGE-CHANGE", text:messageText.current.value})
    }

    return (
        <div className="messages">
            {props.messagesPage.messagesText.map(e => <Message message={e.message} name={e.name} id={e.id} />)}
            <input type="text" onChange={onMessageChange} value={props.messagesPage.newMessageText} ref={messageText} placeholder="type your message" />
            <button onClick={addMessage}>send</button>
        </div>
    )
}

export default Messages;