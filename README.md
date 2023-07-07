
# React와 History API 사용하여 SPA Router 기능 구현하기

## 요구사항
**1) 해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**

- `/` → `root` 페이지
- `/about` → `about` 페이지

**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

- 힌트) `window.onpopstate`, `window.location.pathname` History API(`pushState`)

**3) Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**

```tsx
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

**4) 최소한의 push 기능을 가진 useRouter Hook을 작성한다.**
```typescript
const { push } = useRouter();
```

## 실행 방법
```bash
npm install
npm run dev
```

## 구현 내용
**1) Router** 

- Router 컴포넌트는 현재 경로인 path 를 상태로 가지며, Route 컴포넌트의 path 값을 모은 pathTable 을 가진다. 
- Context API 를 통해 하위 컴포넌트에 전달한다.
- window 에 popstate 이벤트를 등록하고 popstate 발생 시 path 를 업데이트한다.

**2) Routes**

- Routes 컴포넌트는 하위 Route 컴포넌트를 확인하여 pathTable 을 채운다.
- 중첩된 Route 인 경우 부모 Route 의 path 를 추가하여 채운다.

**3) Route**

- props 로 넘어온 path 가 전역 path 와 일치하면 props 의 component 를 렌더링한다.
- parentPath 가 있을 경우 parentPath 와 결합하여 확인 후 렌더링한다.
- 하위에 Route 컴포넌트가 있을 경우 하위 Route 컴포넌트를 렌더링한다. 
  - 이 때 자신의 path 를 parentPath 로 변환하여 하위 Route 에 전달한다.

**4) UseRouter**
- Router 에서 Context 를 통해 전달하는 전역 path, pathTable 을 이용한다.
- push 메서드 : path 를 인자로 전달 받아 history 에 push 하고 전역 path 를 변경한다.
- addRoute 메서드 : 전역 pathTable 에 path 를 등록한다.

## 데모
![Jul-07-2023 23-36-21](https://github.com/teamCoSaIn/trilo-fe/assets/90082464/2318f325-671b-4c66-b0b6-547dfde73fec)