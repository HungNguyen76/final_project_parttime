import './App.css';
import { Routes, Route } from 'react-router-dom'
import LazyLoad from './LazyLoad'
import Navbar from '@components/Navbars/Navbar'

function App() {
  return (
    <div className="App">
      <div className='navbar_container'>
        <div className='navbar_contents'>
            <Navbar />
        </div>
      </div>
      <div className='app_container'>
        <Routes>
          <Route path="" element={LazyLoad(() => import("@pages/Homes/Home"))()}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
