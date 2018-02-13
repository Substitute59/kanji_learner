import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import { Header, Footer } from './components';
import { Home, List, Quizz, About } from './pages';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <div className="App-container">
        <Row>
          <Col s={12}>
            <Route exact path="/" component={Home} />
            <Route path="/liste" component={List} />
            <Route path="/quiz" component={Quizz} />
            <Route path="/a-propos" component={About} />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
