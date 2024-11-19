import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/Slices/UsersSlice';

const UserForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [success,setSuccess] = useState(false);
    const dispatch = useDispatch();



    const handlesubmit = (e)=>{
        e.preventDefault();

        //  new user data //

        const newUser = {

            id:Date.now(),
            email,
            password
        };

        dispatch(addUser(newUser))

        console.log("User added",newUser);

        setSuccess(true);
        setEmail('');
        setPassword('');

        setTimeout(()=>{
            setSuccess(false);
        },3000)
    }  

  return (
    <div className="relative flex flex-col rounded-xl bg-transparent"> 
  <form onSubmit={handlesubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    <div class="mb-1 flex flex-col gap-6">
      <div className="w-full max-w-sm min-w-[200px]">
        <label className="block mb-2 text-sm text-slate-600">
          Email
        </label>
        <input value={email} required type="email" onChange={(e)=>setEmail(e.target.value)} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
      </div>
      <div className="w-full max-w-sm min-w-[200px]">
        <label className="block mb-2 text-sm text-slate-600">
          Password
        </label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} required type="password" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Password" />
      </div>
    </div>
    
    <button type="submit"  className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Submit
    </button>
   
  </form>
  {
    success && <div className='Update Success'><p className='text-green-500 text-[1rem] text-center'>User created successfully</p></div>
  }
</div>
  )
}

export default UserForm
