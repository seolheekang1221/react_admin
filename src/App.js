import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Header></Header>
      <hr />
      <div className="container">
        <Nav></Nav>
        <hr />
        <section className="contents">
          <div>
            <h3>Members</h3>
            <p>Contents</p>
          </div>
        </section>
        <hr />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
