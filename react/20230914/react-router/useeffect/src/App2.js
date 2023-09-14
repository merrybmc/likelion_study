import React, { useEffect, useState } from 'react';

export default function App() {
  const [loginState, setLoginState] = useState(false);
  return (
    <>
      <MyPage loginState={loginState} />
    </>
  );
}

function MyPage({ loginState }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (loginState === false) {
      alert('로그인 중일때만 접근 가능합니다.');
      navigate('/login');
    }
  }, []);

  return <p>마이페이지</p>;
}

function LoginInput() {
  return <p>LoginInput</p>;
}
