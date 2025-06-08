import "./messages.css"
import Message from "../Message/Massage";
function Messages() {
    return (
        <div className="messages">
            <Message message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit ducimus adipisci vitae earum odio dicta, veritatis quod quas numquam, corporis nostrum. Quaerat, in fuga error repudiandae sint impedit eveniet.
' name='John Dow' />
            <Message message='iam tierd' name='Ivan Ivanov' />
            <Message message='want a coffee' name='Petya' />
            <input type="text" value="" placeholder="type your message" />
            <button>send</button>
        </div>
    )
}

export default Messages;