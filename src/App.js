import './App.css';
import  {Routes,Route} from  'react-router-dom';
import Signin from './components/Signin';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
