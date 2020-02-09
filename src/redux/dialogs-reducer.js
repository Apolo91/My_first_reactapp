const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {  
    DialogsData: [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Victor' },
        { id: 3, name: 'Olga' },
        { id: 4, name: 'Anna' },
        { id: 5, name: 'Egor' },
        { id: 6, name: 'Egor' },
    ],
    MessageData: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'It\'s fine' },
       
    ],
    newMessageText: ""
};

const dialogsReducer = (state = initialState , action) => {

    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:          
            return {
                ...state,
                newMessageText: action.newMessage
            };
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText:  '',
                MessageData: [...state.MessageData,{ id: 7, message: newMessage }]
            } 
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreator = (newMessage) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage });

export default dialogsReducer;