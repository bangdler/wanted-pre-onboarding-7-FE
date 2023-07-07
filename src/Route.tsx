import React, {
  Children,
  isValidElement,
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
  const { path: routerPath } = useRouter();

  const regex = new RegExp(path);
  if (!regex.test(routerPath)) {
    return null;
  }

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

  // 하위 컴포넌트로 Route 만 존재해야하며, Route 가 있다면 parentPath 와 함께 반환
  if (Children.count(children)) {
    return Children.map(children, child => {
      if (!isValidElement(child)) {
        throw new Error('Route component can only have route components as children.');
      }
      if (child.type === React.Fragment) {
        throw new Error('Route component can only have route components as children.');
      }
      if (!child.props.path || !child.props.component) {
        throw new Error('Route component can only have route components as children.');
      }

      const newPath =
        !parentPath || parentPath === '/' ? path : parentPath + path;

      return React.cloneElement(child as ReactElement, {
        parentPath: newPath,
        ...(child as ReactElement).props,
      });
    });
  }

  return null;
};

export default Route;
