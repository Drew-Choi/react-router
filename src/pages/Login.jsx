import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../store/modules/user';
import axios from 'axios';

export default function Login() {
  const registerIdInput = useRef();
  const registerPwInput = useRef();

  const dispatch = useDispatch();

  const registerUser = async () => {
    if (!registerIdInput.current.value || !registerPwInput.current.value)
      return alert('필수 값을 입력해주세요.');

    const resRegister = await axios.post(
      'http://localhost:4000/user/register',
      {
        id: registerIdInput.current.value,
        password: registerPwInput.current.value,
      },
    );
    if (resRegister.status !== 200) return alert(resRegister.data);
    alert(resRegister.data);

    dispatch(
      login({
        id: registerIdInput.current.value,
        password: registerPwInput.current.value,
      }),
    );

    // const resRegister = await fetch('http://localhost:4000/user/register', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     id: registerIdInput.current.value,
    //     password: registerPwInput.current.value,
    //   }),
    // });
    // if (resRegister.status !== 200) return alert(await resRegister.json());
    // alert(await resRegister.json());
    // dispatch(
    //   login({
    //     id: registerIdInput.current.value,
    //     password: registerPwInput.current.value,
    //   }),
    // );
  };

  return (
    <>
      {/* 로그인파트  */}
      <h1>로그인 파트입니다.</h1>
      아이디 : <input type="text" />
      <br /> <br />
      비밀번호 : <input type="password" />
      <br /> <br />
      <button>로그인</button> <Link to="">카카오 로그인</Link>
      <br />
      <br />
      <br />
      <br />
      {/* 회원가입파트  */}
      <h1>회원가입 파트입니다.</h1>
      아이디 : <input ref={registerIdInput} type="text" />
      <br /> <br />
      비밀번호 : <input ref={registerPwInput} type="password" />
      <br /> <br />
      <button onClick={registerUser}>회원가입</button>
    </>
  );
}
