const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'V'},
        {id: 6, name: 'jksljcls'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'hdcjsclkdsjcl'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'ijxsall'},
        {id: 5, message: 'hi'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
       case UPDATE_NEW_MESSAGE_BODY:
           state.newMessageBody = action.body;
           return state;
       case SEND_MESSAGE:
           let body = state.newMessageBody;
           state.newMessageBody = '';
           state.messages.push({id: 6, message: body});
           return state;
       default:
           return state;
   }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer; 