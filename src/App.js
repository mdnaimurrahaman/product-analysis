
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import DashBoard from './Components/DashBoard/DashBoard';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/reviews'element={<Reviews/>}/>
        <Route path='/dashboard'element={<DashBoard/>}/>
        <Route path='/blogs'element={<Blogs/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='*'element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
