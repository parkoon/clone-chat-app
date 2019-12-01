import { SELECT_CHAT, GET_ROOM, ADD_MESSAGE } from "../constants/actionType";

export const selectChat = id => ({
  type: SELECT_CHAT,
  id
});

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  chatId,
  message
});

// export const getRoom = id => ({
//     type: GET_ROOM,
//     id
// })
