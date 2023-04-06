import React from 'react';
import styled from 'styled-components';
import PinkButton from '../components/PinkButton';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store/modules/mbti';

export default function Show() {
  //상태영역
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explanation = useSelector((state) => state.mbti.explanation[result]);
  const dispatch = useDispatch();

  //스타일 영역
  const Header = styled.p`
    font-size: 3em;
  `;

  const Explanation = styled.p`
    font-size: 1.5em;
    color: #777;
  `;

  const Result = styled.p`
    font-size: 3em;
    color: dodgerblue;
  `;

  const Additional = styled.p`
    font-size: 2em;
    color: orange;
  `;

  const AdditionalImg = styled.img`
    width: 500px;
    transform: translateX(-35px);
  `;

  return (
    <>
      <Header>당신의 개발자 MBTI 결과는?</Header>
      <Explanation>{explanation.text}</Explanation>
      <Result>{result}</Result>
      <Additional>이건 재미로 읽어보세요!</Additional>
      <AdditionalImg src={explanation.img} alt="팩폭" />
      <PinkButton text="다시 검사하기" clickEvent={() => dispatch(reset())} />
    </>
  );
}
