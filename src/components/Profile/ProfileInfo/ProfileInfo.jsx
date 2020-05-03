import React from 'react';
import s from './ProfileInfo.module.css';
import Profile from '../Profile';


const ProfileInfo = () => {
    return (
        <div className={s.ProfileInfo}>
            <div>
                <img src='https://halleytourism.com/wp-content/uploads/2018/11/img-bou.png' />
            </div>
            <div>
                avatar + descript
            </div>
        </div>
    );
}
export default ProfileInfo;