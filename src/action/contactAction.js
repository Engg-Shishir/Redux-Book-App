import { 
  CREATE_CONTACT, 
  GET_CONTACT, 
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT
 } from '../constant/type';
//this action call from Addcontact.js
// a parameter in redux action function is indicated by payload.
//here this new_contact parametr is come from Addcontact.js
//And This redux action can not show his result without dispatch
export const addConatct = (new_contact) =>({
  type:CREATE_CONTACT,
  payload: new_contact
});

//get a contacts data
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload:id
});


//update a cotact
export const upadteContact = (update_contact) => ({
  type:UPDATE_CONTACT,
  payload:update_contact,
})


//delte a contact
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload:id,
})



//select all contact
export const selectAllcontact = (id) => ({
  type: SELECT_CONTACT,
  payload:id,
});


//clear sellected cotact
export const clearAllcontact = () => ({
  type: CLEAR_CONTACT,
});


//Delete sellected cotact
export const deleteAllcontact = () => ({
  type: DELETE_SELECTED_CONTACT,
});







