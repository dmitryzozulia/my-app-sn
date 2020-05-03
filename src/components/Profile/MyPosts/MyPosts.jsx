import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElement = props.posts.map(p => <Post message={p.message} like={p.like} />)

    return (
        <div>
            <div className={s.NewPost}>
                <textarea></textarea>
                <button>Submit</button>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    );
}
export default MyPosts;