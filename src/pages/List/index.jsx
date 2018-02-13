import React from 'react';
import { Button, Col } from 'react-materialize';
import kanjiList from '../../datas/kanji.json';
import './index.css';

function Levels(props) {
  const method = props.method;
  if (method === 'grade') {
    return (
      <div>
        <Col s={6}>
          <Button
            large
            waves="light"
            node="a"
            href="/liste#grade"
            className={`List-button ${
              props.method === 'grade' ? 'List-button--active' : ''
            }`}
            onClick={() => this.filterBy('grade', 1)}
          >
            {`Grade`}
          </Button>
        </Col>
        <Col s={6}>
          <Button
            large
            waves="light"
            node="a"
            href="/liste#grade"
            className={`List-button ${
              props.method === 'grade' ? 'List-button--active' : ''
            }`}
            onClick={() => this.filterBy('grade', 1)}
          >
            {`Grade`}
          </Button>
        </Col>
        <Col s={6}>
          <Button
            large
            waves="light"
            node="a"
            href="/liste#grade"
            className={`List-button ${
              props.method === 'grade' ? 'List-button--active' : ''
            }`}
            onClick={() => this.filterBy('grade', 1)}
          >
            {`Grade`}
          </Button>
        </Col>
        <Col s={6}>
          <Button
            large
            waves="light"
            node="a"
            href="/liste#grade"
            className={`List-button ${
              props.method === 'grade' ? 'List-button--active' : ''
            }`}
            onClick={() => this.filterBy('grade', 1)}
          >
            {`Grade`}
          </Button>
        </Col>
        <Col s={6}>
          <Button
            large
            waves="light"
            node="a"
            href="/liste#grade"
            className={`List-button ${
              props.method === 'grade' ? 'List-button--active' : ''
            }`}
            onClick={() => this.filterBy('grade', 1)}
          >
            {`Grade`}
          </Button>
        </Col>
        <Col s={6}>
          <Button
            large
            waves="light"
            node="a"
            href="/liste#grade"
            className={`List-button ${
              props.method === 'grade' ? 'List-button--active' : ''
            }`}
            onClick={() => this.filterBy('grade', 1)}
          >
            {`Grade`}
          </Button>
        </Col>
        <Col s={6}>
          <Button
            large
            waves="light"
            node="a"
            href="/liste#grade"
            className={`List-button ${
              props.method === 'grade' ? 'List-button--active' : ''
            }`}
            onClick={() => this.filterBy('grade', 1)}
          >
            {`Grade`}
          </Button>
        </Col>
      </div>
    );
  }
  return (
    <div>
      <Col s={6}>
        <Button
          large
          waves="light"
          node="a"
          href="/liste#grade"
          className={`List-button ${
            props.method === 'grade' ? 'List-button--active' : ''
          }`}
          onClick={() => this.filterBy('grade', 1)}
        >
          {`Grade`}
        </Button>
      </Col>
      <Col s={6}>
        <Button
          large
          waves="light"
          node="a"
          href="/liste#grade"
          className={`List-button ${
            props.method === 'grade' ? 'List-button--active' : ''
          }`}
          onClick={() => this.filterBy('grade', 1)}
        >
          {`Grade`}
        </Button>
      </Col>
      <Col s={6}>
        <Button
          large
          waves="light"
          node="a"
          href="/liste#grade"
          className={`List-button ${
            props.method === 'grade' ? 'List-button--active' : ''
          }`}
          onClick={() => this.filterBy('grade', 1)}
        >
          {`Grade`}
        </Button>
      </Col>
      <Col s={6}>
        <Button
          large
          waves="light"
          node="a"
          href="/liste#grade"
          className={`List-button ${
            props.method === 'grade' ? 'List-button--active' : ''
          }`}
          onClick={() => this.filterBy('grade', 1)}
        >
          {`Grade`}
        </Button>
      </Col>
      <Col s={6}>
        <Button
          large
          waves="light"
          node="a"
          href="/liste#grade"
          className={`List-button ${
            props.method === 'grade' ? 'List-button--active' : ''
          }`}
          onClick={() => this.filterBy('grade', 1)}
        >
          {`Grade`}
        </Button>
      </Col>
    </div>
  );
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kanjiList: [],
      method: 'grade',
      level: 1,
    };

    this.filterBy = this.filterBy.bind(this);
  }

  componentDidMount() {
    this.updateKanjiList();
  }

  updateKanjiList() {
    this.setState(() => ({
      kanjiList: kanjiList.filter(
        i => i[this.state.method] === this.state.level
      ),
    }));
  }

  filterBy(method, level) {
    this.setState(() => ({
      kanjiList: kanjiList.filter(i => i[method] === level),
      method,
      level,
    }));
  }

  render() {
    return (
      <div className="List">
        <h1 className="List-title">Trier par</h1>
        <Col s={6}>
          <Button
            large
            waves="light"
            node="a"
            href="/liste#grade"
            className={`List-button ${
              this.state.method === 'grade' ? 'List-button--active' : ''
            }`}
            onClick={() => this.filterBy('grade', 1)}
          >
            {`Grade`}
          </Button>
        </Col>
        <Col s={6}>
          <Button
            large
            waves="light"
            node="a"
            href="/liste#jlpt"
            className={`List-button ${
              this.state.method === 'jlpt' ? 'List-button--active' : ''
            }`}
            onClick={() => this.filterBy('jlpt', 1)}
          >
            {`JLPT`}
          </Button>
        </Col>
        <Levels method={this.state.method} />
        {this.state.kanjiList.map(kanji => (
          <Col s={2} m={1} key={kanji.index}>
            {kanji.character}
          </Col>
        ))}
      </div>
    );
  }
}

export default List;
