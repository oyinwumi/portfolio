import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import LandingPage from './component/LandingPage';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App  font-normal overflow-hidden">
    
     <Router>
     <Navbar/>
     
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Project/>}/>
       </Routes>
      
     </Router>
    </div>
  );
}

export default App;
