import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      {/* 라우터 그려지는 영역 */}
      <Header />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
