import React from 'react';
import { Button, Col } from 'react-materialize';
import './index.css';

const Home = () => (
  <div className="Home">
    <h1 className="Home-title">Bienvenue sur Kanji Learner</h1>
    <p className="Home-intro">Apprenons les kanji ensemble</p>
    <Col s={10} m={8} l={6} offset={'s1 m2 l3'} className="Home-col">
      <Button
        large
        waves="light"
        node="a"
        href="/liste"
        className="Home-button"
      >
        {`Liste des kanji`}
      </Button>
    </Col>
    <Col s={10} m={8} l={6} offset={'s1 m2 l3'} className="Home-col">
      <Button large waves="light" node="a" href="/quiz" className="Home-button">
        {`Quiz`}
      </Button>
    </Col>
    <Col s={10} m={8} l={6} offset={'s1 m2 l3'} className="Home-col">
      <Button
        large
        waves="light"
        node="a"
        href="/a-propos"
        className="Home-button"
      >
        {`A propos`}
      </Button>
    </Col>
  </div>
);

export default Home;
