const ADD_POST = "ADD-POST"
const POST_CHANGE = "POST-CHANGE"

let initialState = {
    postsText: [
        { name: 'John Dow', message: 'hello world', id: 1, likes: 7 },
        { name: 'John Dow', message: 'i am cat', id: 2, likes: 3 },
        { name: 'John Dow', message: 'lets sing', id: 3, likes: 4 }
    ],
    newPostText: "",
}

let profileReducer = (state = initialState, action) => {
    if (action.type == ADD_POST) {
        let postsText = state.postsText
        let newPost = {
            name: "John Dow",
            message: state.newPostText,
            id: postsText.length + 1,
            likes: 9
        }
        postsText.unshift(newPost)
        state.newPostText = ""
    } else if (action.type == POST_CHANGE) {
        state.newPostText = action.text
    }
    return state
}

export default profileReducer;

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