import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Parent from './Parent.jsx'
import Child from './Child.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Parent />} />
       <Route path="/child" element={<Child />} />
   </Routes> 
 </BrowserRouter>
    
  )
