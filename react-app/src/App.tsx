// @ts-ignore
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/test' element={<div>test</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
