import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from './Contact';
import { useEffect } from 'react';
import { selectAllcontact, clearAllcontact, deleteAllcontact } from '../../action/contactAction';



const Contacts = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const contacts = useSelector(state => state.xyz.contacts);

  const selectedContcts = useSelector((state) => state.xyz.selectedContacts);

useEffect(() =>{
  if(selectAll){
    dispatch(selectAllcontact(contacts.map(contact => contact.id)));
  }else{
    dispatch(clearAllcontact());
  }
}, [selectAll])
  //useSelector is aredux method who select data
  //2 state are same.First state represant all data.second stete represant contacts part from all data.

 return (
  <div>
    {
      selectedContcts.length > 0 ?(
        <button className="btn btn-danger mb-3" onClick={() => dispatch(deleteAllcontact())}>Delete All</button>
      ): null
    }
    <table className="table table-striped table-lighttable-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">
            <div className="custom-control custom-checkbox">
              <input 
                type="checkbox" className="custom-control-input" id="selectAll"
                value={selectAll}
                onClick={() => setSelectAll(! selectAll)}
              />
              <label className="custom-control-label" htmlFor="selectAll"></label>
            </div>
          </th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          //this contacts come from avove contacts variavle.where useSelector put all (state.contacts) data.
          contacts.map((data) => (
            <Contact contact ={data} key={contacts.id} selectAll={selectAll}/> 
             //Here Call, Contact-component Contact() Metod by <Contact /> Tag.And pass all data by contact={} attribute which i get by map method.And also pass a contacts.id-- because id is now cituted in contacts variavle which is already create sometime before. Now i access data fron Contact.js component using a argument, iN react which is called props.Lers seee.......
          ))
        }

      </tbody>
    </table>
  </div>
 )
}

export default Contacts
