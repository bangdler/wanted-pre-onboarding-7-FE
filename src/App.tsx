import './App.css';
import Router from './Router';
import Route from './Route';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <Route
        path={'/'}
        component={
          <div>
            <Nav />
            home
          </div>
        }
      />
      <Route
        path={'/about'}
        component={
          <div>
            <Nav />
            about
          </div>
        }
      />
      <Route
        path={'/user'}
        component={
          <div>
            {' '}
            <Nav />
            user
          </div>
        }
      />
    </Router>
  );
}

export default App;
