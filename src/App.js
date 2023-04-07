import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import BoardDetail from './components/BoardDetail';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import TestRedux from './components/TestRedux';
import ListContainer from './components/ListContainer';
import styled from 'styled-components';
import Start from './pages/Start';
import GlobalStyle from './components/GlobalStyle';
import Mbti from './pages/Mbti';
import { useSelector } from 'react-redux';
import Show from './pages/Show';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  const isLogin = useSelector((state) => state.user.isLogin);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={isLogin !== false ? <Main /> : <Login />} />
      </Routes>
    </>
  );
}

export default App;
