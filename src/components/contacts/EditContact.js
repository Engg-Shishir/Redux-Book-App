import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getContact, upadteContact } from '../../action/contactAction';

 import { useHistory, useParams } from 'react-router-dom';


//Class components are ES6 classes that extend from React.Component and can have state and lifecycle methods:

//Functional components are functions that just accept arguments as the properties of the component and return valid JSX:
 

const EditContact = () => {

  let {id} = useParams();
    //alert(id);
  let history = useHistory();
  const dispatch = useDispatch();
  
  const contact = useSelector(state => state.xyz.contact);

  //xyz come from main-reducer file index.js
  //useState is a Hook that allows you to have state variables in functional components. The useState Hook allows you to declare only one state variable (of any type) at a time.useState takes the initial value of the state variable as an argument.


 /* 
 ----Without using object destructuring
  const Message= () => {
    const messageState = useState( '' );
    const message = messageState[0]; // Contains ''
    const setMessage = messageState[1]; // It’s a function
 }

 ----Using object destructuring
    const {message, setMessage } = useState( '' );


    The second element returned by useState is a function that takes a new value to update the state variable.
 */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  


  useEffect(() =>{
    if(contact != null){
       setName(contact.name);
       setPhone(contact.phone);
       setEmail(contact.email);
    }
     dispatch(getContact(id))
  },[contact]);


const onUpdateContact = e =>{
  e.preventDefault();
  const update_contact = Object.assign(contact,{
    name:name,
    phone:phone,
    email:email
  });
  dispatch(upadteContact(update_contact));
  history.push("/");
};

 return (
   //this return function alaways  return jsx
 <div class="card">
   <div className="card-header text-center text-bold">
    <h3>Add Contact</h3>
   </div>
   <div class="card-body">

     <form onSubmit={(e) => onUpdateContact(e)}>
       { /* when form is submit createContact() is call*/ }
        <div class="form-group">
          <label for="name">Name</label>
          <input 
            type="text" 
            class="form-control" 
            id="name" 
            placeholder="Enter Your Name" 
            value={name}
            onChange={(e) => {
              const name = e.target.value;
              setName(name);
            }}
            //create a empty arrow function and pass e. And it is return setName() with its value.
          />
        </div>

        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email" 
            class="form-control" 
            id="email" 
            placeholder="Enter Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
           />
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input 
            type="text" 
            class="form-control"
            id="phone" 
            placeholder="Enter Phone No" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)} 
           />
        </div>

        <div class="form-group">
          <input type="submit" class="form-control btn btn-warning " id="submit" value="Update Contact"/>
        </div>


     </form>
   </div>
 </div>
 )
}

export default EditContact;
