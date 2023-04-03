import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">홈으로 이동</Link>
          </li>
          <li>
            <Link to="/profile">프로필 페이지로 이동</Link>
          </li>
          <li>
            <Link to="/board">게시판 페이지로 이동</Link>
          </li>
        </ul>
      </nav>

      {/* 라우터 그려지는 영역 */}
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
