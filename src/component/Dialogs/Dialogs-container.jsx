import { updateNewMessageTextCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import React from 'react'
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import {compose} from 'redux';


let mapStateToProps = (state) => {
    return { 
        DialogsPage: state.DialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageText: (newMessage) => {
            dispatch(updateNewMessageTextCreator(newMessage));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

