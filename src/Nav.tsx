import useRouter from './useRouter';

const Nav = () => {
  const { push } = useRouter();
  return (
    <div style={{ display: 'flex', margin: '20px' }}>
      <div
        style={{ margin: '20px', pointer: 'cursor' }}
        onClick={() => {
          push('/');
        }}
      >
        홈으로 이동하기
      </div>
      <div
        style={{ margin: '20px', pointer: 'cursor' }}
        onClick={() => {
          push('/2');
        }}
      >
        홈2로 이동하기
      </div>
      <div
        style={{ margin: '20px', pointer: 'cursor' }}
        onClick={() => {
          push('/about');
        }}
      >
        about 페이지로 이동하기
      </div>
      <div
        style={{ margin: '20px', pointer: 'cursor' }}
        onClick={() => {
          push('/about/2');
        }}
      >
        about 2로 이동하기
      </div>
      <div
        style={{ margin: '20px', pointer: 'cursor' }}
        onClick={() => {
          push('/user');
        }}
      >
        user 페이지로 이동하기
      </div>
    </div>
  );
};

export default Nav;
