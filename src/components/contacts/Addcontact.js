import React, {useState, createContext} from 'react';
import {useDispatch} from 'react-redux';
import { addConatct } from '../../action/contactAction';
import shortid from 'shortid';
 import { useHistory } from 'react-router-dom';


//Class components are ES6 classes that extend from React.Component and can have state and lifecycle methods:

//Functional components are functions that just accept arguments as the properties of the component and return valid JSX:
 

const Addcontact = () => {
  let history = useHistory();

  const dispatch = useDispatch();
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
  

  const createContact = e =>{
    e.preventDefault();
    const new_contact ={
      id:shortid.generate(),
      name:name,
      email:email,
      phone:phone
    };
    dispatch(addConatct(new_contact));
    //we pass new_contact argumemt in contactAction.js component using addContact();
    
    history.push("/");
  };


 return (
   //this return function alaways  return jsx
 <div class="card">
   <div className="card-header text-center text-bold">
    <h3>Add Contact</h3>
   </div>
   <div class="card-body">

     <form onSubmit={(e) => createContact(e)}>
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
          <input type="submit" class="form-control btn btn-primary " id="submit" value="Create Contact"/>
        </div>


     </form>
   </div>
 </div>
 )
}

export default Addcontact;
