import React, { useEffect } from 'react'



function TableData({data ,onDelete}) {

  return (
    <table border={1}>
    <thead>
        <tr>
            <td>Employee Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>contact Number</td>
            <td>Dob</td>
            <td>Email</td>
            <td>Salary</td>
            <td>Address</td>
            <td>Action</td>
        </tr>
    </thead>
    <tbody>
{
     data?.map(item=>{
    console.log(data)

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
            <td><button className='delete-button' onClick={()=>{onDelete(item)}}>Delete</button></td>
            </tr>
        )
    })

}
</tbody>
</table>
  )
}

export default TableData