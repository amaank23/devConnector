import React from 'react'

function PostContainer({ name, text, date, comments }) {
    return (
            <div class="post bg-white p-1 my-1">
                <div>
                    <a href="profile.html">
                    <img
                        class="round-img"
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                        alt=""
                    />
                    <h4>{name}</h4>
                    </a>
                </div>
                <div>
                    <p class="my-1">
                    {text}
                    </p>
                    <p class="post-date">
                        Posted on {date.split('T')[0]}
                    </p>
                    <button type="button" class="btn btn-light">
                    <i class="fas fa-thumbs-up"></i>
                    <span>4</span>
                    </button>
                    <button type="button" class="btn btn-light">
                    <i class="fas fa-thumbs-down"></i>
                    </button>
                    <a href="post.html" class="btn btn-primary">
                    Discussion <span class='comment-count'>{comments.length}</span>
                    </a>
                    <button      
                    type="button"
                    class="btn btn-danger"
                >
                    <i class="fas fa-times"></i>
                </button>
                </div>
            </div>
    )
}

export default PostContainer
