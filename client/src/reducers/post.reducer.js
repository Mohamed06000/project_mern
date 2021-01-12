import {DELETE_POSTS, GET_POSTS, LIKE_POSTS, UNLIKE_POSTS, UPDATE_POSTS} from "../actions/post.actions";

const initialState = {}

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS :
            return action.payload
        case LIKE_POSTS:
            return state.map((post) => {
                if (post._id === action.payload.postId)
                    return {
                        ...post,
                        likers: [action.payload.userId, ...post.likers]
                    }
                return post
            })
        case UNLIKE_POSTS:
            return state.map((post) => {
                if (post._id === action.payload.postId)
                    return {
                        ...post,
                        likers: post.likers.filter((id) => id !== action.payload.userId)
                    }
                return post
            })
        case UPDATE_POSTS:
            return state.map((post) => {
                if (post._id === action.payload.postId){
                    return {
                        ...post,
                        message: action.payload.message
                    }
                } else return post
            })

        case DELETE_POSTS:
            return state.filter((post) => post._id !== action.payload.postId)
        default:
            return state
    }
}