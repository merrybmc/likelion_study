import { BrowserRouter, Outlet, Route, Routes, useParams } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/*' element={<Outlet />}>
          <Route path='coupon' element={<CouponPage />} />
          <Route path='question' element={<Question />} />
          <Route path='notice' element={<Notice />} />
        </Route>
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/products/:id/notice' element={<ProductDetailNoticePage />} />
        {/* <Route path='/users/coupon' element={<CouponPage />} />
        <Route path='/users/question' element={<Question />} />
        <Route path='/users/notice' element={<Notice />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return <h1>홈페이지</h1>;
}

function Cart() {
  return <h1>카트</h1>;
}

function Users() {
  return <h1>유저들</h1>;
}

function CouponPage() {
  return <h1>쿠폰페이지</h1>;
}

function Question() {
  return <h1>질문페이지</h1>;
}

function Notice() {
  return <h1>공지페이지</h1>;
}

function ProductDetailPage() {
  const { id } = useParams();
  return <h1>{id}번 상품입니다.</h1>;
}

function ProductDetailNoticePage() {
  const { id } = useParams();
  return <h1>{id}번째 상세페이지</h1>;
}
