import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <Login/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
