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
    board:[[1,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]],
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
        width:Math.ceil((width / 4) - 10),
        height:Math.ceil((height / 4) - 10)
      }
    })

    document.addEventListener('keydown',this.handleKeyEvent);
  }

  move = direction =>{
    let { position:{x,y}, board } = this.state;
   
    if(direction === DIRECTION.RIGHT){
      board[y][x] = 0; // resetea la posicion actual
      x++; // incremente la posicion (según el eje)
      board[y][x] = 1; // le da un nuevo valor, de acuerdo a la posicion modificada
    }else if(direction === DIRECTION.LEFT){
      board[y][x] = 0;
      x--;
      board[y][x] = 1;
    }else if(direction === DIRECTION.UP){
      board[y][x] = 0;
      y--;
      board[y][x] = 1;
    }else if(direction === DIRECTION.DOWN){
      board[y][x] = 0;
      y++;
      board[y][x] = 1;
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
    this.move(event.keyCode)
  }

  render() {
    const { board, size, currentCell } = this.state;
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
        {/* 
          <Snake 
            width={width}
            height={height}
            position
          />
        */}
        
      </section>
    );
  }
}

export default Board;
