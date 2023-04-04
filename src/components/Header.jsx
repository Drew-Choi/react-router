import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <button onClick={() => navigate('/')}>홈으로 이동</button>
          </li>
          <li>
            <button onClick={() => navigate('/profile')}>
              프로필 페이지로 이동
            </button>
          </li>
          <li>
            <Link to="/board">게시판 페이지로 이동</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
