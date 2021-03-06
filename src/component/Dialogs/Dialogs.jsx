import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

    let state = props.DialogsPage;

    let dialogs = state.DialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messages = state.MessageData.map(m => <Message message={m.message} />)

    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();

    }

    let onAddMessageText = (e) => {
        let newMessage = e.target.value;
        props.updateNewMessageText(newMessage)
        
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messagesItems}>
                <textarea placeholder='Enter the message' value={newMessageText} onChange={onAddMessageText} />
                <button onClick={onSendMessageClick}>Add message</button>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs;  