import React, {useEffect,useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../actions/post.actions";
import {isEmpty} from "./Utils";
import Card from "./Post/Card";

const Thread = () => {
    const [loadPost, setloadPost] = useState(true)
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.postReducer)

    useEffect(() => {
        if (loadPost) {
            dispatch(getPosts())
            setloadPost(false)
        }
    }, [loadPost])

    return (
        <div className={'thread-container'}>
            <ul>
                {!isEmpty(posts[0]) &&
                posts.map((post) => {
                    return <Card post={post} key={post._id}/>
                })}
            </ul>
        </div>
    );
};

export default Thread;