// all the Snake code goes here
import {getInputDirection} from './input.js';

export let snakeSpeed = 5;
const body = document.querySelector('body')

const snakeBody =[
    {x:11, y:11},
]
let newSegments = 0

export function update(){
    addSegemts()

    console.log('update snake ')
    const inputDirection = getInputDirection();
    // const h2 = document.createElement('h2');
    // h2.innerText = snakeBody[0].x + " " + snakeBody[1].x + " "+snakeBody[2].x +'next  '
    // h2.style.color = "white";
    // body.appendChild(h2)

    for(let i=snakeBody.length -2; i>=0; i--){
        snakeBody[i+1] = {...snakeBody[i]}
        console.log("i", i);
        console.log("sb", ...snakeBody)
    }
    // snakeBody[0].x +=0;
    // snakeBody[0].y +=1

    snakeBody[0].x +=inputDirection.x;
    snakeBody[0].y +=inputDirection.y;


}

export function draw(gameBoard){
    console.log('draw snake')
    
    snakeBody.forEach(segment =>{
        // console.log(segment)
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}


export function expandSnake(amount){
    newSegments += amount
}

// compare our position with our segment position\

// export function onSnake(position){
//     return snakeBody.some(segment => {
//         return equalPosition(segment, position)
//     })
// }
//passing default in case we dont pass anything {ignoreHead = false}={}
//index===0 means we are on head
export function onSnake(position, {ignoreHead = false}={}){
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index===0) return false
        return equalPosition(segment, position)
    })
}


export function getsnakeHead(){
    return snakeBody[0]
}


export function snakeIntersection(){
    return onSnake(snakeBody[0], {ignoreHead: true})
}


function equalPosition(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

// take new segments and add at the bottom of our snake
function addSegemts(){
    for(let i =0; i< newSegments; i++){
        // snakeBody[snakeBody.length] =  {snakeBody[snakeBody.length -1]}
        snakeBody.push({...snakeBody[snakeBody,length -1]})
    }

    newSegments = 0
}