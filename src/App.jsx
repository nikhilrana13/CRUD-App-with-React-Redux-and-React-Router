import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'


function App() {
 

  return (
    <>
     <div className='app flex flex-col w-full mx-auto h-screen items-center gap-5 justify-center'>
      <h1 className='text-[4rem]'>Crud App</h1>
      <div className='flex gap-5 w-1/5'>  
        <NavLink className='mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' to={'/createuser'}>Create User</NavLink>
        <NavLink className='mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' to={'/userlist'}>User's List</NavLink>
      </div>
       
     </div>
    </>
  )
}

export default App
