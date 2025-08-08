const ADD_POST = "ADD-POST"
const POST_CHANGE = "POST-CHANGE"

let profileReducer = (action, state) => {
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