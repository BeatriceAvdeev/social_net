const MESSAGE_CHANGE = "MESSAGE-CHANGE"
const ADD_MESSAGE = "ADD-MESSAGE"

let initialState = {
    messagesText: [
        { name: 'John Dow', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit ducimus adipisci vitae earum odio dicta, veritatis quod quas numquam, corporis nostrum. Quaerat, in fuga error repudiandae sint impedit eveniet.', id: 1 },
        { name: 'Ivan Ivanov', message: 'iam tierd', id: 2 },
        { name: 'Petya', message: 'want a coffee', id: 3 }
    ],
    newMessageText: "",
}
let messagesReducer = (state = initialState, action) => {
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