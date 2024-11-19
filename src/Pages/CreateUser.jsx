import React from 'react'
import UserForm from '../Components/UserForm'
import { NavLink } from 'react-router-dom'

const CreateUser = () => {
  return (
      <>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='text-[3rem]'>Create New User's</h1>
      <UserForm />
        <div className='flex gap-5 w-1/1'>
            <NavLink to={'/userlist'}
             className="mt-4 w-full rounded-md bg-blue-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">User List</NavLink>

        </div>
      </div>
     
      </>
     
  )
}

export default CreateUser
