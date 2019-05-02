import React, { Component } from 'react';
import './snake.css';

let handleEvent;
export default class Snake extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    /* global window */
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    /* global window */
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {

    let keyCode = event.keyCode;
    
    // console.log(event)
    let contador = 0;
    const snake = document.querySelector('.snake');
    const { x } = snake.getBoundingClientRect();
    if(keyCode === 39){
      handleEvent = setInterval(()=>{
        contador++;
        snake.style.left = `${contador*10}px`;
      },100)
    }
    if(keyCode === 40){
      handleEvent = setInterval(()=>{
        contador++;
        snake.style.top = `${contador*10}px`;
      },100)
    }
    if(keyCode === 32){
      clearInterval(handleEvent);
    }
  }
  render() {
    const { width, height, currentCell} = this.props;
    console.log(currentCell);
    console.log(currentCell)
    return (
      <div className="snake"
        style={{ 'width': width, 'height': height }}
      />
    );
  }
}
