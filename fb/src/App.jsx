import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import CreateStory from './Components/CreateStory';
import AddFriend from './Components/AddFriend';

function App() {
  return (
    <div >
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/createstory' element={<CreateStory/>}/>
        <Route exact path='/addfriend' element={<AddFriend/>}/>
      </Routes>
    </div>
  );
}

export default App;
