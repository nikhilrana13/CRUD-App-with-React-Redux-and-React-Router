
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateUser from './Pages/CreateUser.jsx'
import UserList from './Pages/UserList.jsx'
import UpdateUser from './Pages/UpdateUser.jsx'
import { Provider } from 'react-redux'
import store from './Redux/Store.jsx'




const router = createBrowserRouter([

   { 
    path:'/',
    element:<App/>,
   },
   {
    path:'/createuser',
    element:<CreateUser/>,
   },
   {
    path:'/userlist',
    element:<UserList/>

  },
   {
    path:'/updateuser/:userId',
    element:<UpdateUser/>
   }
])



const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

  
)