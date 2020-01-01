import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogs = props.state.DialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messages = props.state.MessageData.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messagesItems}>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs;  