import axios from "axios";

//posts
export const GET_POSTS = "GET_POSTS"
export const LIKE_POSTS = "LIKE_POSTS"
export const UNLIKE_POSTS = "UNLIKE_POSTS"


export const getPosts = () => {
    return(dispatch) => {
        return axios({
            method: 'get',
            url: `${process.env.REACT_APP_API_URL}api/post/`
        })
            .then((res) => {
                dispatch({type: GET_POSTS, payload: res.data})
            })
            .catch((err) => console.log(err))
    }
}

export const likePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/post/like-post/` +postId,
            data: {id: userId}
        })
            .then((err)=> {
                dispatch({type: LIKE_POSTS, payload: {postId, userId}})
            })
            .catch((err) => console.log(err))
    }
}

export const unlikePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/post/unlike-post/` +postId,
            data: {id: userId}
        })
            .then((err)=> {
                dispatch({type: UNLIKE_POSTS, payload: {postId, userId}})
            })
            .catch((err) => console.log(err))
    }
}
//comments