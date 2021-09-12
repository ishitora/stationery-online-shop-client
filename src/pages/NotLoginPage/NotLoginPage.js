//沒登入時跳轉到此
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function NotLoginPage() {
  const history = useHistory();
  useEffect(() => {
    let timer = setTimeout(() => history.push('/'), 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [history]);

  return <div>你還沒有登入 無法進行此操作 5秒後跳轉回首頁</div>;
}

export default NotLoginPage;
