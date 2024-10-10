/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Complaint from './pages/Complaint'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SingUp from './pages/SingUp'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import NewProperty from '../../Backend/pages/NewProperty'
import Calendar from '../../Backend/pages/Calendar'

export default function App() {
  return <BrowserRouter>

  <Header />
  <Routes>
    
    <Route path="/" element={<Home />} />
    
    <Route path="/About" element={<About  />} />
    
    <Route path="/Complaint" element={< Complaint/>} />

    <Route path="/Dashboard" element={<Dashboard  />} />
    <Route path="/SignIn" element={<SignIn />} />
    
    <Route path="/SingUp" element={<SingUp  />} />
    <Route path="/NewProperty" element={<NewProperty  />} />
    <Route path="/Calendar" element={<Calendar  />} />

     
  </Routes>
  
  </BrowserRouter>
}
