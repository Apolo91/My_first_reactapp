const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.newMessageText = '';
            state.MessageData.push({ id: 7, message: newMessage });
            return state;
        default:
            return state;
    }

}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreator = (newMessage) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage });

export default dialogsReducer;