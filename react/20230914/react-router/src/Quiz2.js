import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<Cart />} />
        {/* Outlet은 라우트에서 자식으로 있는 컴포넌트를 꺼내서 보여주는 컴포넌트! */}
        {/* <Route path="/users/*" element={<Outlet/>}> */}
        <Route path='/users/*' element={<Users />}>
          {/* 이 안에 중첩할 라우트 들이 들어갑니다~! */}
          {/* 여기 주소는 /users */}
          {/* <Route path="" element={<Users/>}/> */}
          {/* /users/coupon */}
          <Route path='coupon' element={<CouponPage />} />
          {/* /users/question */}
          <Route path='question' element={<QuestionPage />} />
          {/* /users/notice */}
          <Route path='notice' element={<NoticePage />} />
        </Route>
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/products/:id/notice' element={<ProductDetailNoticePage />} />
      </Routes>
      <Button />;
    </BrowserRouter>
  );
}

function ProductDetailNoticePage() {
  const { id } = useParams();
  return <h1>{id}번 상품 상세 알림? 페이지</h1>;
}

function CouponPage() {
  return <h1>쿠폰</h1>;
}

function NoticePage() {
  return <h1>알림</h1>;
}

function QuestionPage() {
  return <h1>?</h1>;
}

function ProductDetailPage() {
  const { id } = useParams();
  return <h1>{id}번 상품 입니다~!</h1>;
}

function Cart() {
  return <h1>카트</h1>;
}

function Users() {
  return (
    <div>
      <h1>유저들</h1>
      <Outlet />
    </div>
  );
}

function HomePage() {
  return <h1>홈페이지</h1>;
}

export default App;

function Button() {
  const navigate = useNavigate();
  const moveLocation = (command) => {
    if (command === 'Home') navigate('/home');
    if (command === 'List') navigate('/List');
    if (command === 'Cart') navigate('/Cart');
  };
  return (
    <>
      <button onClick={() => moveLocation('Home')}>클릭1</button>
      <button onClick={() => moveLocation('List')}>클릭2</button>
      <button onClick={() => moveLocation('Cart')}>클릭3</button>
    </>
  );
}

function Button() {
  const navigate = useNavigate();

  const [user, setUser] = useState({ id: '', pw: '' });

  const Login = () => {
    if (user.id === 'hello@world.com' && user.pw === 'qwer1234') {
      alert('로그인 성공!');
      navigate('/mypage');
    } else {
      alert('아이디와 비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <>
      아이디 : <input onChange={(e) => setUser({ ...user, id: e.target.value })} />
      비밀번호 : <input onChange={(e) => setUser({ ...user, pw: e.target.value })} />
      <button onClick={() => Login()}>로그인</button>
    </>
  );
}
