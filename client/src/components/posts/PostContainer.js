import React from 'react'
import { Link } from 'react-router-dom'

function PostContainer({ id, name, text, date, comments, likePost, likes, unlikePost, deletePost, user_id, authUser }) {
    return (
            <div className="post bg-white p-1 my-1">
                <div>
                    <Link to={`/post/${id}`}>
                        <img
                            className="round-img"
                            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                            alt=""
                        />
                        <h4>{name}</h4>
                    </Link>
                </div>
                <div>
                    <p className="my-1">
                    {text}
                    </p>
                    <p className="post-date">
                        Posted on {date.split('T')[0]}
                    </p>
                    <button type="button" className="btn btn-light" onClick={() => likePost(id)}>
                    <i className="fas fa-thumbs-up"></i>
                    <span>{likes.length}</span>
                    </button>
                    <button type="button" className="btn btn-light"onClick={() => unlikePost(id)}>
                    <i className="fas fa-thumbs-down"></i>
                    </button>
                    <Link to={`/post/${id}`} className='btn btn-primary'>
                        Discussion <span className='comment-count'>{comments.length}</span>
                    </Link>
                    
                    {authUser.isAuthenticated && authUser.user._id === user_id && 
                    <button      
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deletePost(id)}
                >
                    <i className="fas fa-times"></i>
                </button>}
                </div>
            </div>
    )
}

export default PostContainer
