import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Products from './Components/Products';
import Orders from './Components/Orders';
import CalenderView from './Components/CalenderView';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Sidebar /><Dashboard/></>
    },
    {
      path: "/products",
      element: <><Sidebar /><Products/></>
    },
    {
      path: "/orders",
      element: <><Sidebar /><Orders /></>
    },
    {
      path: "/calendar",
      element: <><Sidebar /><CalenderView/></>
    },
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;

