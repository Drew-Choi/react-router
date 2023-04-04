import React from 'react';
import { useSelector } from 'react-redux';

export default function TestRedux() {
  const weight = useSelector((state) => state);
  return (
    <>
      <h1>당신의 몸무게는 {weight}</h1>
    </>
  );
}
