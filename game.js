import {update as updateSnake,  draw as drawSnake, snakeSpeed, getsnakeHead, snakeIntersection} from './snake.js';

import {update as updateFood, draw as drawFood} from './food.js';

import {outsideGrid} from './grid.js';

const game_board = document.querySelector('#game_board');
let lastRenderTime = 0;
let gameover = false;

function main(currentTime){

    if(gameover){
        // return alert(' u lose')
        if(confirm('you lost. press ok to restart')){
            window.location='/'
        }
        return 
    }

    requestAnimationFrame(main);

    

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;  // to convert in sec (/1000)
    if (secondsSinceLastRender < 1 / snakeSpeed) return
    console.log('render')
    lastRenderTime = currentTime;

    // update() move the snake update the things, tell if we loss the game
    // draw() will take the information from update and then draw it
    update();
    draw();
}

requestAnimationFrame(main);



function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    game_board.innerHTML = "";
    drawSnake(game_board)
    drawFood(game_board);
}


function checkDeath(){
    gameover = outsideGrid(getsnakeHead()) || snakeIntersection()
}