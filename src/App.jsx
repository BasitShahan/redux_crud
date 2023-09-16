import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css'
import CreatePost from './components/CreatePost';
import ReadPost from './components/ReadPost';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Example from './components/context/Example';
import Data from './components/context/Data';



export default function App() {
  return (  
    <>
   <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/createpost' element={<CreatePost/>} />
        <Route path='/' element={<ReadPost/>} />
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/delete/:id' element={<Delete/>} />
        <Route path='/example' element={<Example/>} />
        <Route path='/data' element={<Data/>} />
        
        
      </Routes>
    </BrowserRouter>
  
    </>
  )
}