import React, { Component } from 'react';
import Snake from '../components/snake';
import './board.css';

const DIRECTION = {
  RIGHT: 39,
  LEFT: 37,
  UP: 38,
  DOWN: 40
}

class Board extends Component {
  state = {
    board:[
      [1,0,0,0], // 0 // filas  // co
      [0,0,0,0], // 1           // lum
      [0,0,0,0], // 2           // nas
      [0,0,0,0], // 3
      [0,0,0,0], // 4
    ],
    position:{
      x: 0,
      y: 0
    },
    size:{
      width:0,
      height:0
    }
  }
  componentDidMount() {
    const section = document.querySelector('.section');
    
    const { width, height } = section.getBoundingClientRect();
    this.setState({
      size:{
        width:Math.ceil((width / 5) - 10),
        height:Math.ceil((height / 5) - 10)
      }
    })

    document.addEventListener('keydown',this.handleKeyEvent);
  }

  move = (direction) => {
    let { position:{x,y}, board } = this.state;
    const lengthBoard = board.length;

    if(direction === DIRECTION.RIGHT){
      console.log(x)
      if(x !== (lengthBoard -1)){
        board[y][x] = 0; // resetea la posicion actual
        x++; // incremente la posicion (según el eje)
        board[y][x] = 1; // le da un nuevo valor, de acuerdo a la posicion modificada
      }
    }else if(direction === DIRECTION.LEFT){
      if(x !== 0){
        board[y][x] = 0;
        x--;
        board[y][x] = 1;
      }
    }else if(direction === DIRECTION.UP){
      if(y !== 0){
        board[y][x] = 0; // posicion inicial
        y--; // el cambio en la posicion
        board[y][x] = 1;
      }
    }else if(direction === DIRECTION.DOWN){
      if(y !== (lengthBoard - 1)){
        board[y][x] = 0;
        y++;
        board[y][x] = 1;
      }
    }

    this.setState({
      position:{
        x,
        y
      },
      board,
    })
  }
  
  handleKeyEvent = event =>{
    this.move(event.keyCode, event)
  }

  render() {
    const { board, size } = this.state;
    const width = `${size.width || 0}px`;
    const height = `${size.height || 0}px`;

    return (
      <section className="section">
        { board.map((index, x) => {
           return board.map((index,j) => {
              return (
                <div 
                  key = {`${x}-${j}`}
                  className={board[x][j] === 1 ? "snake" : "celda" } 
                  style={{ width , height }}
                >
                  <span>{x}</span>,
                  <span>{j}</span>
                </div>
              );
            });
          })
        }        
      </section>
    );
  }
}

export default Board;
