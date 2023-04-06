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
  const survey = useSelector((state) => state.mbti.survey);

  return (
    <>
      <GlobalStyle />
      <Main>
        {page === 0 ? <Start /> : page <= survey.length ? <Mbti /> : <Show />}
      </Main>
    </>
  );
}

export default App;
