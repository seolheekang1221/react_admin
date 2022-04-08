import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Drugs from './components/contents/Drugs.js';
import Login from './components/contents/Login.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <hr />
        <div className="container">
          <hr />
          <section className="contents">
            <Switch>
              <Route exact={true} path="/login" component={Login} />
              <Route exact={true} path="/drugs" render={props => <Drugs {...props} testProps={true} />} />
              <Redirect to={{ pathname: "/login" }} />
            </Switch>
          </section>
          <hr />
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
