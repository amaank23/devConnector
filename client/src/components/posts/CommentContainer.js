import React from 'react'
import Spinner from '../layout/Spinner'

function CommentContainer({ post_id, name, text, date, authUser, user_id, deleteComment, comment_id }) {
    return  (
        <div className="post bg-white p-1 my-1">
            <div>
                <a href="profile.html">
                <img
                    className="round-img"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt=""
                />
                <h4>{name}</h4>
                </a>
            </div>
            <div>
                <p className="my-1">
                {text}
                </p>
                <p className="post-date">
                    Posted on {date.split('T')[0]}
                </p>
            </div>
            {authUser.isAuthenticated && authUser.user._id === user_id && 
                <button      
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteComment(post_id, comment_id)}
                >
                    <i className="fas fa-times"></i>
                </button>}
            
        </div>
    )
}

export default CommentContainer
