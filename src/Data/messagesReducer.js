const MESSAGE_CHANGE = "MESSAGE-CHANGE"
const ADD_MESSAGE = "ADD-MESSAGE"

let messagesReducer = (action, state) => {
    if (action.type == MESSAGE_CHANGE) {
        state.newMessageText = action.text
    } else if (action.type == ADD_MESSAGE) {
        let messagesText = state.messagesText
        let newMessage = {
            name: "John Dow",
            message: state.newMessageText,
            id: messagesText.length + 1
        }
        messagesText.unshift(newMessage)
        state.newMessageText = ""
    }
    return state
}


export default messagesReducer;

export let addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    }
}

export let onMessageChangeAC = (text) => {
    return {
        type: "MESSAGE-CHANGE",
        text: text
    }
}