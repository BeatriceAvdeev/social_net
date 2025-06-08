function Message(props){
    return (
        <div className="message">
            <p className="name">{props.name}</p>
            <p className="message-text">{props.message}</p>
        </div>
    )
}

export default Message;