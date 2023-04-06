import React from 'react';
import styled from 'styled-components';
import OrangeButton from '../components/OrangeButton';
import { useDispatch } from 'react-redux';
import { next } from '../store/modules/mbti';

export default function Start() {
  const MainImg = styled.img`
    width: inherit;
  `;
  const Header = styled.p`
    font-size: 3em;
  `;
  const SubHeader = styled.p`
    font-size: 1.5em;
    color: #777;
  `;

  const dispatch = useDispatch();

  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="메인 이미지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아 봅시다!
      </SubHeader>
      <OrangeButton
        text="테스트시작"
        clickEvent={() => {
          dispatch(next());
        }}
      />
    </>
  );
}
