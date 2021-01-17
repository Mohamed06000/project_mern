import axios from "axios";

//posts
export const GET_POSTS = "GET_POSTS"
export const LIKE_POSTS = "LIKE_POSTS"
export const UNLIKE_POSTS = "UNLIKE_POSTS"
export const UPDATE_POSTS = "UPDATE_POSTS"
export const DELETE_POSTS = "DELETE_POSTS"

//comments
export const ADD_COMMENT = "ADD_COMMENT"
export const EDIT_COMMENT = "EDIT_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"

export const getPosts = (num) => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}api/post/`
        })
            .then((res) => {
                const array = res.data.slice(0, num)
                dispatch({type: GET_POSTS, payload: array})
            })
            .catch((err) => console.log(err))
    }
}

export const addPost = (data) => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}api/post/`,
            data: data
        })


    }
}

export const likePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/post/like-post/` + postId,
            data: {id: userId}
        })
            .then((err) => {
                dispatch({type: LIKE_POSTS, payload: {postId, userId}})
            })
            .catch((err) => console.log(err))
    }
}

export const unlikePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/post/unlike-post/` + postId,
            data: {id: userId}
        })
            .then((err) => {
                dispatch({type: UNLIKE_POSTS, payload: {postId, userId}})
            })
            .catch((err) => console.log(err))
    }
}

export const updatePost = (postId, message) => {
    return (dispatch) => {
        return axios({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/post/${postId}`,
            data: {message}
        })
            .then((res) => {
                dispatch({type: UPDATE_POSTS, payload: {message, postId}})
            })
            .catch((err) => console.log(err))
    }
}

export const deletePost = (postId) => {
    return (dispatch) => {
        return axios({
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}api/post/${postId}`
        })
            .then((res) => {
                dispatch({type: DELETE_POSTS, payload: {postId}})
            })
            .catch((err) => console.log(err))
    }
}


//comments

export const addComment = (postId, commenterId, text, commenterPseudo) => {
    return (dispatch) => {
        console.log(commenterPseudo)
        console.log(commenterId)
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/post/comment-post/${postId}`,
            data: { id : commenterId, text: text, pseudo: commenterPseudo }
        })
            .then((res) => {
                dispatch({type: ADD_COMMENT, payload: {postId}})
            })
            .catch((err) => console.log(err))
    }
}

export const editComment  = (postId, commentId, text) => {
    return (dispatch) => {
        return axios({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}api/post/edit-comment-post/${postId}`,
            data: {commentId, text}
        })
            .then((res) => {
                dispatch({type: EDIT_COMMENT, payload: {postId, commentId, text}})
            })
            .catch((err) => console.log(err))
    }
}


export const deleteComment  = (postId, commentId) => {
    return (dispatch) => {
        return axios({
            method: 'patch',
            url: `${process.env.REACT_APP_API_URL}api/post/delete-comment-post/${postId}`,
            data: {commentId}
        })
            .then((res) => {
                dispatch({type: DELETE_COMMENT, payload: {postId, commentId}})
            })
            .catch((err) => console.log(err))
    }
}