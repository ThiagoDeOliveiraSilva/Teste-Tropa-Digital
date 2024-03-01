import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  const [paginaSelecionada, setPaginaSelecionada] = useState('')

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home paginaSelecionada={paginaSelecionada} setPaginaSelecionada={setPaginaSelecionada} />} />
      </Routes>
    </Router>
  );
}

export default App;
