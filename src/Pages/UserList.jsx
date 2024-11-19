import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeUser } from '../Redux/Slices/UsersSlice'


const UserList = () => {
    const users = useSelector((state)=>state.users);
    const dispatch = useDispatch();
    

    const handleDelete = (id)=>{
        console.log(id)
        dispatch(removeUser({id}))
    }
    


  return (
    <div className="container  p-4 mt-[8rem] justify-center">
        <div className='flex w-full border justify-between p-2 items-center'>
        <h1 className="text-[2rem] font-bold mb-4">User Lists</h1>
    <NavLink to={'/'} className="border py-2 px-2 rounded bg-blue-500 text-white" >Home</NavLink>
        </div>
     

      {/* User Table */}

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">EMAIL</th>
            <th className="border p-2">PASSWORD</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        {<tbody>
        
        {users.map((user)=>{
            return(
                <tr key={user.id} className="border-b">
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.password}</td>
                <td className="p-2">
                  <NavLink to={`/updateuser/${user.id}`} className="bg-yellow-500 text-white p-1 rounded mr-2">Edit</NavLink>
                  <button onClick={()=>handleDelete(user.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
                </td>
              </tr>

            )
        })}


         

       

         
        </tbody> }
      </table>
    </div>
    
  )
}

export default UserList
