import React, { Component } from 'react';
import './snake.css';

export default class Snake extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    /* global window */
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    /* global window */
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    console.log(event)
  }
  render() {
    return (
      <div className="snake" />
    );
  }
}
