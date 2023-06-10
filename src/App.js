import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
//Components import
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { Aboutus } from './components/Aboutus/Aboutus';
import { Contactus } from './components/Contactus/Contactus';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='aboutus' element={<Aboutus/>}/>
        <Route path='contactus' element={<Contactus/>}/>
      </Routes>
    </div>
  );
}

export default App;
