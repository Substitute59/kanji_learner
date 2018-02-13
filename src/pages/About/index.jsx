import React from 'react';
import './index.css';

const About = () => (
  <div className="About">
    <h1 className="About-title">A propos</h1>
    <p className="About-intro">
      {`
      Cette application est conçue pour apprendre les kanji, caractères chinois qui sont utilisés dans le système d'écriture japonais moderne.
      `}
    </p>
    <p className="About-intro">
      {`
        L'application comprend une liste de kanji les plus couramment utilisés, développée et gérée par le ministère de l'Éducation japonais pour les élèves japonais, connue sous le nom de Jōyō kanji.
      `}
      <br />
      {`
        Ce groupe de kanji est le plus souvent utilisé pour l'apprentissage de kanji par des locuteurs non natifs et il est essentiel pour ceux qui commencent à apprendre le japonais.
      `}
      <br />
      {`
        Vous pouvez obtenir plus d'informations sur Jōyō kanji ici :
      `}
      <br />
      {`
        Wikipedia:
      `}
      <a
        href="https://fr.wikipedia.org/wiki/J%C5%8Dy%C5%8D_kanji"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Jōyō kanji`}
      </a>
    </p>
    <p className="About-intro">
      {`
        Pour rendre l'apprentissage de kanji plus confortable, la liste de caractères peut être filtrée, soit selon les années scolaires japonaises, soit selon le niveau de JLPT.
      `}
    </p>
    <h2 className="About-subtitle">{`Lecture des Kanji`}</h2>
    <p className="About-intro">
      {`
        La plupart des kanji a au moins deux lectures possibles : ON et KUN.
      `}
      <br />
      {`
        La lecture on (on'yomi) des kanji dérive des prononciations originelles chinoises.
      `}
      <br />
      {`
        La lecture kun (kun'yomi) ne reprend que le sens chinois en utilisant une, ou plusieurs, prononciations d'origine japonaise.
      `}
      <br />
      {`
        La lecture appropriée dépend du contexte dans lequel elle apparaît.
      `}
      <br />
      {`
        L'application ne comprend que des lectures essentielles des kanji (les lectures ON sont représentés par les lettres majuscules).
      `}
    </p>
    <h2 className="About-subtitle">{`Listes des kanji`}</h2>
    <p className="About-intro">
      {`
        Une liste de kanji représente des caractères, leurs lectures et leurs significations.
      `}
    </p>
    <h2 className="About-subtitle">{`Cartes`}</h2>
    <p className="About-intro">
      {`
        Les cartes peuvent être utiles pour étudier ou réviser les caractères un par un.
      `}
      <br />
      {`
        Par défaut, la signification du caractère est cachée, et votre but est de vous en souvenir.
      `}
      <br />
      {`
        Au cas où vous avez oublié la signification, vous pouvez la réviser en appuyant sur la carte.
      `}
    </p>
    <h2 className="About-subtitle">{`Quiz`}</h2>
    <p className="About-intro">
      {`
        Les quiz permettent de s'entrainer à retrouver :
      `}
      <br />
      {`
        - la signification d'un kanji
      `}
      <br />
      {`
        - les lectures d'un kanji
      `}
      <br />
      {`
        Ils permettent également l'exercice en sens inverse, à savoir, retrouver :
      `}
      <br />
      {`
        - un kanji à partir de sa signification
      `}
      <br />
      {`
        - un kanji à partir de ses lectures
      `}
    </p>
    <h2 className="About-subtitle">{`Références`}</h2>
    <p className="About-intro">
      {`
        Les images représentant l'ordre des traits de caractères ont été faites à l'aide du projet KanjiVG.
      `}
      <br />
      {`
        Les données sont protégés par le droit d'auteur © 2009-2015 Ulrich Apel et sont utilisées sous les termes d'une licence Creative Commons Attribution-Share Alike 3.0.
      `}
      <br />
      {`
        Veuillez consulter la page du projet pour plus de détails.
      `}
    </p>
  </div>
);

export default About;
