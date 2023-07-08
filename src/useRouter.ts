import {ReactElement, useContext} from 'react';
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

  const addRoute = (url: string, element:ReactElement) => {
    context.pathTable.current[url] = element;
  };

  const findRoute = () => {
    if(context.pathTable.current[context.path]) {
      return context.pathTable.current[context.path].props.component
    } else {
      throw Error('no routes matched');
    }
  }

  return { path: context.path, push, addRoute, findRoute };
};

export default useRouter;
