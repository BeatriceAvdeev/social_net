

let state = {
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


}

export default state;
let rerenderTree = () => {
    console.log("its fake function");
}

export let subscribe = (observer) => {
    rerenderTree = observer
}
export let addPost = (postText) => {
    let postsText = state.profilePage.postsText
    let newPost = {
        name: "John Dow",
        message: postText,
        id: postsText.length + 1,
        likes: 9
    }
    postsText.unshift(newPost)
    state.profilePage.newPostText = ""
    rerenderTree(state)


}
export let onPostChange = (text) => {
    state.profilePage.newPostText = text
    rerenderTree(state)
}

export let onMessageChange = (text) => {
    state.messagesPage.newMessageText = text
    rerenderTree(state)
}


export let addMessage = (messageText) => {
    let messagesText = state.messagesPage.messagesText
    let newMessage = {
        name: "John Dow",
        message: messageText,
        id: messagesText.length + 1
    }
    messagesText.unshift(newMessage)
    state.messagesPage.newMessageText = ""
    rerenderTree(state)
}

window.state = state
