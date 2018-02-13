import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';
import './index.css';

const HeaderComponent = () => (
  <header className="Header">
    <Navbar brand="Kanji Learner" right>
      <NavItem href="/">
        <Icon small>home</Icon>
      </NavItem>
      <NavItem href="/liste">{`Liste des kanji`}</NavItem>
      <NavItem href="/quiz">{`Quiz`}</NavItem>
      <NavItem href="/a-propos">{`A propos`}</NavItem>
    </Navbar>
  </header>
);

export default HeaderComponent;
