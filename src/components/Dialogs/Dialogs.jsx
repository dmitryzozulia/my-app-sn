import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.dialogName} id={d.id} />)
    let messagesElements = props.messages.map(m => <Message message={m.messageValue} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {dialogsElements}
            </div>
            <div className={s.messagesList}>
                {messagesElements}
            </div>
        </div >
    );
}
export default Dialogs;