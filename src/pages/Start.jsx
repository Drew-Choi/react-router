import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import OrangeButton from '../components/OrangeButton';
import { useDispatch } from 'react-redux';
import { init, next } from '../store/modules/mbti';

export default function Start() {
  const [counts, setCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  //외부에서 펑션으로 async/await문법을 활용해 fetch나 axios 구조 만들어 놓고
  //useEffect로 함수 실행을 해줌
  async function fetchData() {
    //mbti 데이터 받아오는 코드
    const resMbtiData = await fetch('http://localhost:4000/data/getData');
    if (resMbtiData.status === 200) {
      //데이터 json으로 받으니까 이걸 다시 객체화 시킴, 근데 이것들이 배열로 들어옴에 주의
      const mbtiData = await resMbtiData.json();
      if (mbtiData[0]) dispatch(init(mbtiData[0]));
    } else {
      //콘트롤러에서 err 설정해 두었으니 그 에러 코드를 그대로 가져옴
      console.log(await resMbtiData.json());
    }

    //방문자수 받아오는 코드
    const resGetCounts = await fetch('http://localhost:4000/data/getCounts');
    if (resGetCounts.status === 200) {
      const countData = await resGetCounts.json();
      setCount((cur) => countData.counts);
    } else {
      console.log(await resGetCounts.json());
    }
  }

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
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아 봅시다! {'\n\n'} {counts}
        명이 참여해 주셨습니다.
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
