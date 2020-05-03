import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <h3>post 1</h3>
            <img src="https://halleytourism.com/wp-content/uploads/2018/11/img-bou.png" alt="" />
            <span>{props.like}</span>
            {props.message}
        </div>
    );
}
export default Post;