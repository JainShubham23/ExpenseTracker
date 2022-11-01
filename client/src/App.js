import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'

import Register from './pages/Register';
import Login from './pages/Login';
function App() {
  return (
    <>
    <Routes>
    <Route path="/register" element={<Register></Register>}></Route>
    <Route path="/" element={<Login></Login>}>

    </Route>
    </Routes>
    </>
  );
}

//creating the protected routes
export function ProtectedRoutes(props){
  if(localStorage.getItem('user')){
    return props.children
  }
  else{
    return <Navigate to= "/login"></Navigate>
  }
}
export default App;
