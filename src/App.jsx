
import './App.css'
import{BrowserRouter,Routes,Route}from 'react-router-dom'

import Singlepage from './Page/Singlepage'
import Homepage from './Page/HomePage'
import Card from './Component/Card'

import CreateForm from './Page/Createform'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/card" element={<Card/>}/>
      <Route path="/studentdetail/:id" element={<Singlepage/>}/>*//
      <Route path="/createform" element={<CreateForm/>}/>

    </Routes>
    </BrowserRouter>
    
  )
}

export default App
