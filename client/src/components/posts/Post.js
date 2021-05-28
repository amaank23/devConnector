import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { addCommentToPost, getPost, deleteComment } from '../../actions/post';
import Spinner from '../layout/Spinner';
import CommentContainer from './CommentContainer';

function Post({ getPost, post, addCommentToPost, authUser, deleteComment }) {
    const [comment, setComment] = useState('');
    const {id} = useParams();
    useEffect(() => {
        getPost(id);
    }, []);
    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            text: comment
        }
        addCommentToPost(formData, post._id);
        setComment('');
    }
    return post === null ? <Spinner /> : (
        <Fragment>
            <a href="posts.html" class="btn">Back To Posts</a>
            <div class="post bg-white p-1 my-1">
                <div>
                <a href="profile.html">
                    <img
                    class="round-img"
                    src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                    alt=""
                    />
                    <h4>{post.name}</h4>
                </a>
                </div>
                <div>
                <p class="my-1">
                    {post.text}
                </p>
                </div>
            </div>

            <div class="post-form">
                <div class="bg-primary p">
                <h3>Leave A Comment</h3>
                </div>
                <form class="form my-1" onSubmit={(e) => handleSubmit(e)}>
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Comment on this post"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
                <input type="submit" class="btn btn-dark my-1" value="Submit"/>
                </form>
            </div>

            <div class="comments">
                {post.comments.map(comment => {
                    return (
                        <CommentContainer
                        post_id={post._id}
                        comment_id={comment._id}
                        user_id={comment.user} 
                        name={comment.name} 
                        text={comment.text} 
                        date={comment.date}
                        authUser={authUser}
                        deleteComment={deleteComment}
                        />
                    )
                })}
            </div>

        </Fragment>
    )
}

const mapStateToProps = state => ({
    post: state.posts.post,
    authUser: state.auth
})

export default connect(mapStateToProps, {getPost, addCommentToPost, deleteComment})(Post);
