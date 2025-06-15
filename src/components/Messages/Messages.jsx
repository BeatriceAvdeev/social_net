import "./messages.css"
import Message from "../Message/Massage";
let messagesNames = [
    { name: 'John Dow', id: 1 },
    { name: 'Ivan Ivanov', id: 2 },
    { name: 'Petya', id: 3 }
]
let messagesText = [
    { name: 'John Dow', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit ducimus adipisci vitae earum odio dicta, veritatis quod quas numquam, corporis nostrum. Quaerat, in fuga error repudiandae sint impedit eveniet.', id: 1 },
    { name: 'Ivan Ivanov', message: 'iam tierd', id: 2 },
    { name: 'Petya', message: 'want a coffee', id: 3 },
    { name: 'Petya', message: 'want a coffee', id: 3 },
    { name: 'Petya', message: 'want a coffee', id: 3 },
    { name: 'Petya', message: 'want a coffee', id: 3 },
    { name: 'Petya', message: 'want a coffee', id: 4 }
]
function Messages() {
    return (
        <div className="messages">
            {messagesText.map(e => <Message message={e.message} name={e.name} id={e.id} />)}
            {/* <Message message={messagesText[0].message} name={messagesText[0].name} />
            <Message message={messagesText[1].message} name={messagesText[1].name} />
            <Message message={messagesText[2].message} name={messagesText[2].name} /> */}
            <input type="text" value="" placeholder="type your message" />
            <button>send</button>
        </div>
    )
}

export default Messages;