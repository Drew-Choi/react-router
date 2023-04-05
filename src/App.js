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
import Start from './components/Start';
import GlobalStyle from './components/GlobalStyle';
import Mbti from './components/Mbti';
import { useSelector } from 'react-redux';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);

  return (
    <>
      <GlobalStyle />
      <Main>{page === 0 ? <Start /> : <Mbti />}</Main>
    </>
  );
}

export default App;
