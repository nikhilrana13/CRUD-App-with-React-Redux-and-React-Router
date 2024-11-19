
import React from 'react'
import { useParams } from 'react-router-dom'
import UpdateForm from '../Components/UpdateForm'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UpdateUser = () => {
    const {userId} = useParams();
    console.log(userId);
    const users = useSelector((state)=>state.users);
    console.log(users);

    const user = users.find((u)=> u.id === Number(userId));

    if(!user){
        return <div> User not found </div>;
    }


  return (
    <div className='w-full h-screen flex flex-col justify-center gap-5 items-center'>
        <div className='flex justify-between w-[80%] gap-10 items-center '>
        <h1 className='text-[2rem]'>Update User Details</h1>
        <NavLink to={'/userlist'} className="border py-2 px-2 rounded bg-blue-500 text-white" >User list's</NavLink>

        </div>
       
        <UpdateForm user={user} />
      
    </div>
  )
}

export default UpdateUser

