import "./messages.css"
import Message from "../Message/Massage";

function Messages(props) {
    return (
        <div className="messages">
            {props.messagesPage.messagesText.map(e => <Message message={e.message} name={e.name} id={e.id} />)}
            <input type="text" placeholder="type your message" />
            <button>send</button>
        </div>
    )
}

export default Messages;