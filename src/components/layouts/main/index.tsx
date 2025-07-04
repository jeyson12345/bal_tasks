import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Main() {
  // Scroll to top when route changes
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname == '/') {
      navigate('/tasks');
    }
  }, []);

  return <Outlet />;
}

export default Main;
