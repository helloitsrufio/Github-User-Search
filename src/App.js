import './App.css';
import React from 'react'
import Search from './pages/searchPage'
import SearchResultsPage from './pages/searchResultsPage'
import NoPage from './pages/noPage'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'

// Might be having problems with the routes.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Search />} />
          <Route path= '/searchResultsPage' element={<SearchResultsPage />}/>
          <Route path="*" element={<NoPage />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
