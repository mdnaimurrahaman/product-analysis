
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import DashBoard from './Components/DashBoard/DashBoard';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/reviews'element={<Reviews/>}/>
        <Route path='/dashboard'element={<DashBoard/>}/>
        <Route path='/blogs'element={<Blogs/>}/>
        <Route path='/about'element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
