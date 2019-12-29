import React from 'react';
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let DialogsData = [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Victor' },
        { id: 3, name: 'Olga' },
        { id: 4, name: 'Anna' },
        { id: 5, name: 'Egor' },
    ]

    let MessageData = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'It\'s fine' },
        { id: 4, message: 'Yo!' },
        { id: 5, message: 'Yo!' },
        { id: 6, message: 'Yo!' },
    ]

    let dialogs = DialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messages = MessageData.map(m => <Message message={m.message} />)

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