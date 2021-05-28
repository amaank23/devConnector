import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import PostContainer from './PostContainer';


function Posts({ getPosts, posts }) {
    const [post, setPost] = useState('');

    function handleSubmit(e){
        e.preventDefault();
    }

    useEffect(() => {
        getPosts();
    }, [getPosts])

    return (
        <Fragment>
            <h1 class="large text-primary">
            Posts
            </h1>
            <p class="lead"><i class="fas fa-user"></i> Welcome to the community!</p>
            <div class="post-form">
            <div class="bg-primary p">
            <h3>Say Something...</h3>
            </div>
            <form class="form my-1" onSubmit={(e) => handleSubmit(e)}>
            <textarea
                name="text"
                onChange={(e) => setPost(e.target.value)}
                value={post}
                cols="30"
                rows="5"
                placeholder="Create a post"
                required
            ></textarea>
            <input type="submit" class="btn btn-dark my-1" value="Submit" />
            </form>
            </div>

            <div class="posts">
                {
                    posts.map(post => {
                        return (
                            <Fragment>
                                <PostContainer name={post.name} text={post.text} date={post.text} comments={post.comments} />
                            </Fragment>
                        )
                    })
                }
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    posts: state.posts.posts
})

export default connect(mapStateToProps, {getPosts})(Posts)
