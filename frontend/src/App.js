import './App.css';
import User from './getUser/User';
import AddUser from './addUser/AddUser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const route = createBrowserRouter([
    {path: '/', element: <User />},
    {path: '/addUser', element: <AddUser />}
  ]); 
  
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider> 
    </div>
  );
}

export default App;
