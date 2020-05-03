import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    console.log(props)
    return (
        <div className={s.content}>Main content
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    );
}
export default Profile;