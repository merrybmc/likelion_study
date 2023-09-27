import { useEffect, useState } from 'react';

function useMouseLocation(initValue) {
  const [mouseLocation, setMouseLocation] = useState(initValue || { x: null, y: null });

  // DOM 을 이용해서 화면상의 마우스 좌표를 얻어내고 mouseLocation에 업데이트해보세요.
  // mouseMove 이벤트

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      setMouseLocation({ x: event.x, y: event.y });
    });
  }, []);

  return mouseLocation;
}

export default useMouseLocation;
