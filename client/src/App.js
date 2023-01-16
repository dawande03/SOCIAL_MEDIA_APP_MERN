import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route,Navigate } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Addpost from './pages/Addpost';
import Login from './pages/login/Login';
import {useEffect} from "react";
import { useSelector,useDispatch } from 'react-redux';
import { getAllPosts } from './redux/action/postAction';
import { getAllUsers } from './redux/action/userAction';
import AllPosts from './component/AllPosts';
import Alluser from './pages/Alluser';
import Register from './pages/signup/Register';

function App() {

 // const { loading } = useSelector((state) => state.alertsReducer);

const dispatch = useDispatch()

  useEffect(()=>{
dispatch(getAllPosts())
dispatch(getAllUsers())
  },[])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile/:userid' element={<Profile/>}/>
          <Route path='/addpost' element={<Addpost/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/allpost' element={<AllPosts/>}/>
          <Route path='/alluser' element={<Alluser/>}/>
          <Route path='/' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


// export const ProtectedRoute=(props)=>{

//   if(localStorage.getItem('user')){

//     return <Route {...props}/>

//   }else{
//     return <Navigate to='/login'/>
//   }

// }
