import React from 'react';
import { Footer } from 'react-materialize';
import './index.css';

const FooterComponent = () => (
  <Footer
    className="Footer"
    copyrights="&copy; 2018 Copyright"
    moreLinks={
      <a
        className="white-text right"
        href="http://labo-web-france.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Labo Web France`}
      </a>
    }
  />
);

export default FooterComponent;
