import React, {
  Children,
  ReactElement,
  ReactNode,
} from 'react';
import useRouter from './useRouter';

const Route = ({
  path,
  component,
  children,
  parentPath,
}: {
  path: string;
  component: ReactElement;
  children: ReactNode;
  parentPath?: string;
}) => {
  const { path: routerPath, addRoute } = useRouter();

  addRoute(path);

  if (path === routerPath) {
    return component;
  }

  // nested Route 인 경우 parentPath 가 있으므로 비교
  if (parentPath) {
    const newPath = parentPath === '/' ? path : parentPath + path;
    if (newPath === routerPath) {
      return component;
    }
  }

  // 하위 컴포넌트로 Route 가 있다면 Route 를 return
  if (
    Children.count(children) === 1 &&
    children.props.path &&
    children.props.component
  ) {
    // route 인 경우 routerPath 가 path 를 포함한다면
    const regex = new RegExp(path);
    if (regex.test(routerPath)) {
      return React.cloneElement(
        children,
        { parentPath: path, ...children.props },
        children.children,
      );
    }
  }

  return null;
};

export default Route;
