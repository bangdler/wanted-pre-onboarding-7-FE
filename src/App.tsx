import './App.css';
import Router from './Router';
import Route from './Route';
import Nav from './Nav';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={'/'}
          component={
            <div>
              <Nav />
              home
            </div>
          }
        >
          <Route
            path={'/2'}
            component={
              <div>
                <Nav />
                home2
              </div>
            }
          />
        </Route>
        <Route
          path={'/about'}
          component={
            <div>
              <Nav />
              about
            </div>
          }
        >
          <Route
            path={'/2'}
            component={
              <div>
                <Nav />
                about2
              </div>
            }
          />
        </Route>
        <Route
          path={'/user'}
          component={
            <div>
              <Nav />
              user
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
