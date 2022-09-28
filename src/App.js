import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import About from './pages/About';
import Sidebar from './components/Sidebar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/settings' element={<Settings/>} />
            <Route path='/about' element={<About/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
