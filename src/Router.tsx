import {
  createContext,
  Dispatch,
  MutableRefObject,
  ReactElement,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

export const RouteContext = createContext<{
  path: string;
  setPath: Dispatch<SetStateAction<string>>;
  pathTable: MutableRefObject<Set<string>>;
} | null>(null);

const Router = ({ children }: { children: ReactElement }) => {
  const [path, setPath] = useState(location.pathname);
  const pathTable = useRef<Set<string>>(new Set());

  const popstateHandler = () => {
    const { pathname } = location;
    setPath(pathname);
  };

  useEffect(() => {
    window.addEventListener('popstate', popstateHandler);
    return () => {
      window.removeEventListener('popstate', popstateHandler);
    };
  }, []);

  useEffect(() => {
    if (!pathTable.current.has(path)) {
      throw Error('no routes matched');
    }
  }, [path]);

  const value = { path, setPath, pathTable };

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

export default Router;
