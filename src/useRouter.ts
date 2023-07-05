import { useContext } from 'react';
import { RouteContext } from './Router';

const useRouter = () => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error('useRouter should be used within Router');
  }

  const push = (url: string) => {
    history.pushState(null, '', url);
    context.setPath(url);
  };

  const addRoute = (url: string) => {
    context.pathTable.current.add(url);
  };

  return { path: context.path, push, addRoute };
};

export default useRouter;
