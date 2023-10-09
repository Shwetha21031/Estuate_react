import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import TableData from './TableData';
import { v4 } from 'uuid';
function Project() {
    const url = "https://hub.dummyapis.com/employee?noofRecords=100"

    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState([]);
    const[newItem,setNewItem]=useState({id:'',firstName:'',lastName:'',email:'',contactNumber:'',age:'',dob:'',salary:'',address:''})

      useEffect(() => {
        axios.get(url).then(res=>{
            setData(res.data)
        })
      }, []);

      const onDelete = (item) => {
        const newData = data.filter((d) => d.id !== item.id);
        setDeleted([...deleted, item]);
        setData(newData);
      };
      const permanentDelete = (item) => {
        const newDeletedItems = deleted.filter((d) => d.id !== item.id);
        setDeleted(newDeletedItems);
      };

      const restore = (item) => {
        const newDeletedItems = deleted.filter((d) => d.id !== item.id);
        setDeleted(newDeletedItems);
        const sorted = [...data,item]
        sorted.sort(function(a, b) {
            return (a.id - b.id);
        })
        setData(sorted);
        
      };
      const handleAddRow=(e)=>{
        e.preventDefault()
        // console.log('lalalalaaaaaa',newItem)
          setData([...data,newItem])
          setNewItem({id:'',firstName:'',lastName:'',email:'',contactNumber:'',age:'',dob:'',salary:'',address:''})
        
        }

      


  return (
    <>

    <div className='adding-users'>
    <form >
       
        <input value={newItem.id} onChange={(e)=>setNewItem({...newItem, id:e.target.value})} placeholder='Id'  type='text'  />
        <input value={newItem.firstName} onChange={(e)=>setNewItem({...newItem, firstName:e.target.value})} placeholder='First Name'  type='text'  />
        <input value={newItem.lastName} onChange={(e)=>setNewItem({...newItem, lastName:e.target.value})} placeholder='Last Name'  type='text'  />
        <input value={newItem.age} onChange={(e)=>setNewItem({...newItem, age:e.target.value})} placeholder='Age'  type='text'  />
        <input value={newItem.contactNumber} onChange={(e)=>setNewItem({...newItem, contactNumber:e.target.value})} placeholder='Contact Number'  type='text'  />
        <input value={newItem.dob} onChange={(e)=>setNewItem({...newItem, dob:e.target.value})} placeholder='Date Of Birth'  type='text'  />
        <input value={newItem.email} onChange={(e)=>setNewItem({...newItem, email:e.target.value})} placeholder='Email'  type='text'  />
        <input value={newItem.salary} onChange={(e)=>setNewItem({...newItem, salary:e.target.value})} placeholder='Salary'  type='text'  />
        <input value={newItem.address} onChange={(e)=>setNewItem({...newItem, address:e.target.value})} placeholder='Address'  type='text'  />
        <button type='submit' className='add-btn' onClick={handleAddRow} >Add user</button>

        
    </form >
    </div>

<h2> Users Data</h2>
   <TableData data={data} onDelete={onDelete}/>


   <h2>Deleted Users</h2>
    <div className='deleted-container'>
      <table border={1} className='deleted-table'>
        
      {
        deleted && deleted.map((item)=>{
            return (
                <tr>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
            <td>{item.contactNumber}</td>
            <td>{item.dob}</td>
            <td>{item.email}</td>
            <td>{item.salary}</td>
            <td>{item.address}</td>
            <td><button className='delete-button' onClick={()=>{permanentDelete(item)}}>Permanent Delete</button>
            </td>
            <td><button className='restore-button' onClick={()=>{restore(item)}}>Restore</button></td>
                </tr>
            )
        })
      }
      </table>
    </div>
    </>
  )
}

export default Project


