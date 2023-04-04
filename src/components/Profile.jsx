import React from 'react';
import Header from './Header';
import { useSelector } from 'react-redux';

export default function Profile() {
  const weight = useSelector((state) => state.weightReducer);

  return (
    <>
      {/* <Header /> */}
      <h1>메인페이지 입니다. {weight}</h1>
    </>
  );
}
