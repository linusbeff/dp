const robot = require('robotjs');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

var mouse = robot.getMousePos();
console.log('mouspos = x:' + mouse.x + ' y:' + mouse.y);
let x = process.argv[2];
let y = process.argv[3];
console.log(`targetpos = x: ${x}, y: ${y}`);


while(true) {
  if(robot.getPixelColor(x,y) == 'ff1493') {
    robot.mouseClick();    
  };
}