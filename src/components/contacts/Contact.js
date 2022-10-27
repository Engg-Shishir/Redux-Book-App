import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import {deleteContact} from '../../action/contactAction'
import {useDispatch} from 'react-redux';
//I import avatar fom react-avater library to use Avatar Icon...



//I create and export  a Contact Function with contact parameter. i use array-destructuring to easyest access data...({contact}) parameter is same to same contact={} atribute.which is chituted in Contacts.js component.Where is call this Contact.js component.This ({contact}) parameter bear name,phone,email,id.If i access this data i should write contact.name, contact.phone, contact.email. its not good for better code to repeat same part many time. foe avoid this thing i use bellow also array-destructuring.....
const Contact = ({contact, selectAll}) => {
  
  const dispatch = useDispatch();

const {name,phone,email,id} = contact;

 return (
  <tr>
    <td>
      <div className="custom-control custom-checkbox">
        <input checked={selectAll} type="checkbox" className="custom-control-input"/>
        <label className="custom-control-label"></label>
      </div>
    </td>
    <td>
      <Avatar name={name} size="35" round={true} className="mr-2"/> {name} 
    </td>
    <td> {phone} </td>
    <td> {email} </td>
    <td className="actions">
      {/* to={`/contacts/edit/${id}` } ihis is call tamplateLiterals */}
      <Link to={`/contacts/edit/${id}` }className="btn btn-sm btn-warning mr-2">Edit</Link>

      <span className="btn btn-sm btn-danger" onClick={()=> dispatch(deleteContact(id))}>Del</span>
    </td>
  </tr>
 );
};

export default Contact;
