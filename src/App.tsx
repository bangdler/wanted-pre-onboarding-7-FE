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
            path={'/blog'}
            component={
              <div>
                <Nav />
                blog
              </div>
            }
          >
            <Route
              path={'/private'}
              component={
                <div>
                  <Nav />
                  blog private
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
              path={'/member'}
              component={
                <div>
                  <Nav />
                  about member
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
