const ADD_POST = "ADD-POST"
const POST_CHANGE = "POST-CHANGE"
const MESSAGE_CHANGE = "MESSAGE-CHANGE"
const ADD_MESSAGE = "ADD-MESSAGE"

let store = {
    _state: {
        messagesPage: {
            messagesText: [
                { name: 'John Dow', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odit ducimus adipisci vitae earum odio dicta, veritatis quod quas numquam, corporis nostrum. Quaerat, in fuga error repudiandae sint impedit eveniet.', id: 1 },
                { name: 'Ivan Ivanov', message: 'iam tierd', id: 2 },
                { name: 'Petya', message: 'want a coffee', id: 3 }
            ],
            newMessageText: "",
        },

        profilePage: {
            postsText: [
                { name: 'John Dow', message: 'hello world', id: 1, likes: 7 },
                { name: 'John Dow', message: 'i am cat', id: 2, likes: 3 },
                { name: 'John Dow', message: 'lets sing', id: 3, likes: 4 }
            ],
            newPostText: "",
        }
    },
    rerenderTree() {
        console.log("its fake function");
    },

    subscribe(observer) {
        this.rerenderTree = observer
    },
    dispatch(action) {
        if (action.type == ADD_POST) {
            let postsText = this._state.profilePage.postsText
            let newPost = {
                name: "John Dow",
                message: this._state.profilePage.newPostText,
                id: postsText.length + 1,
                likes: 9
            }
            postsText.unshift(newPost)
            this._state.profilePage.newPostText = ""
        } else if (action.type == POST_CHANGE) {
            this._state.profilePage.newPostText = action.text
        } else if (action.type == MESSAGE_CHANGE) {
            this._state.messagesPage.newMessageText = action.text
        } else if (action.type == ADD_MESSAGE) {
            let messagesText = this._state.messagesPage.messagesText
            let newMessage = {
                name: "John Dow",
                message: this._state.messagesPage.newMessageText,
                id: messagesText.length + 1
            }
            messagesText.unshift(newMessage)
            this._state.messagesPage.newMessageText = ""
        }
        this.rerenderTree(this._state)
    },

    getState() {
        return this._state
    }
}



export default store

export let addPostAC = () => {
    return {
        type: "ADD-POST"
    }
}
export let onPostChangeAC = (text) => {
    return {
        type: "POST-CHANGE",
        text: text
    }
}

window.state = store._state
