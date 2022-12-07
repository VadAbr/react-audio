import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const RouterErrorBoundary = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return <div>Not found!</div>;
};
