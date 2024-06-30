import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Assembly from './Components/Pages/Assembly';
import Cleaning from './Components/Pages/Cleaning';
import Moving from './Components/Pages/Moving';
import Painting from './Components/Pages/Painting';
import Homerepair from './Components/Pages/Homerepair'
import Signup from './Components/Pages/Signup';
import Login from './Components/Pages/Login';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Assembly />}></Route>
        {/* <Route path='/assembly' element={<Assembly />}></Route> */}
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cleaning' element={<Cleaning />}></Route>
        <Route path='/moving' element={<Moving />}></Route>
        <Route path='/painting' element={<Painting />}></Route>
        <Route path='/home-repair' element={<Homerepair />}></Route>
      </Routes>
    </>
  );
}

export default App;
