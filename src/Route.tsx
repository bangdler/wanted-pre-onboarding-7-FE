import { ReactElement } from 'react';
import useRouter from './useRouter';

const Route = ({
  path,
  component,
}: {
  path: string;
  component: ReactElement;
}) => {
  const { path: routerPath, addRoute } = useRouter();

  addRoute(path);

  if (path !== routerPath) {
    return null;
  }

  return component;
};

export default Route;
