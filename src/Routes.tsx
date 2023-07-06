import React, { Children, isValidElement, ReactNode } from 'react';
import useRouter from './useRouter';

const Routes = ({ children }: { children: ReactNode }) => {
  const { addRoute } = useRouter();

  const makePathTable = (children, parentPath) => {
    Children.forEach(children, child => {
      if (!isValidElement(child)) {
        return;
      }
      // 프레그먼트인지 검사한다
      if (child.type === React.Fragment) {
        return;
      }
      // Route 컴포넌트인지 검사한다.
      if (!child.props.path || !child.props.component) {
        return;
      }

      // Route 컴포넌트면 parentPath 와 현재 path 를 더해서 pathTable 에 넣는다.
      const newPath =
        parentPath === '/' ? child.props.path : parentPath + child.props.path;
      addRoute(newPath);

      // child 의 children 이 있는 경우 재귀
      if (child.props.children) {
        makePathTable(child.props.children, newPath);
      }
    });
  };

  makePathTable(children, '/');

  return children;
};

export default Routes;
