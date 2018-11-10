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
    
    console.log(event)
    let contador = 0;
    const snake = document.querySelector('.snake');
    
    if(keyCode === 39){
      handleEvent = setInterval(()=>{
        contador++;
        snake.style.marginLeft = `${contador*10}px`;
      },100)
    }
    if(keyCode === 32){
      clearInterval(handleEvent);
    }
  }
  render() {
    return (
      <div className="snake" />
    );
  }
}
