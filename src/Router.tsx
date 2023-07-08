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
  pathTable: MutableRefObject<object>;
} | null>(null);

const Router = ({ children }: { children: ReactElement }) => {
  const [path, setPath] = useState(location.pathname);
  const pathTable = useRef<object>({});

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

  const value = { path, setPath, pathTable };

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

export default Router;
