import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import SkyBlue from './SkyBlue';
import { next } from '../store/modules/mbti';
import ProgressBar from './ProgressBar';

export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);

  const SurveyQuestion = styled.p`
    font-size: 1.5em;
    color: #777;
  `;

  const Vs = styled.p`
    font-size: 2em;
    padding-top: 1em;
  `;

  const dispatch = useDispatch();

  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyBlue text={el.text} clickEvent={() => dispatch(next())} />
              {index === 0 && <Vs>Vs</Vs>}
            </li>
          );
        })}
      </ul>
      <ProgressBar page={page} maxPage={survey.length} />
    </>
  );
}
