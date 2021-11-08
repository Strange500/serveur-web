const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = "image/goblinsetf.png";



alert("veuillez utiliser chrome pour jouer au jeu,attention au son!!")
function deathsound(){
  document.getElementById('deathsound').play();
}

function clicksound(){
  document.getElementById('clicksound').play();
}
function pointsound(){
  document.getElementById('pointsound').play();
}

// general settings
let gamePlaying = false;
const gravity = .5;
const speed = 2.2;
const size = [51, 36];
const jump = -11.5;
const cTenth = (canvas.width / 10);

let index = 0,
    bestScore = 0, 
    flight, 
    flyHeight, 
    currentScore, 
    pipe;

// pipe settings
const pipeWidth = 58;
const pipeGap = 270;
const pipeLoc = () => (Math.random() * ((canvas.height - (pipeGap + pipeWidth)) - pipeWidth)) + pipeWidth;

const setup = () => {
  currentScore = 0;
  flight = jump;

  // set initial flyHeight (middle of screen - size of the bird)
  flyHeight = (canvas.height / 2) - (size[1] / 2);

  // setup first 3 pipes
  pipes = Array(5).fill().map((a, i) => [canvas.width + (i * (pipeGap + pipeWidth)), pipeLoc()]);
}

const render = () => {
  // make the pipe and bird moving 
  index++;
  

  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  // background first part 
  ctx.drawImage(img, 0, 0, 848, 768, -((index * (speed / 2)) % 106) + 848, 0, 848, 848);
  // background second part
  ctx.drawImage(img, 0, 0, 848, 768, -(index * (speed / 2)) % 106, 0, 848, 848);
  
  
  // pipe display
  if (gamePlaying){
    pipes.map(pipe => {
      // pipe moving
      pipe[0] -= speed;

      // top pipe
      ctx.drawImage(img, 1280, 588 - pipe[1], pipeWidth, pipe[1], pipe[0], 0, pipeWidth, pipe[1]);
      // bottom pipe
      ctx.drawImage(img, 1310 + pipeWidth, 108, pipeWidth, canvas.height - pipe[1] + pipeGap, pipe[0], pipe[1] + pipeGap, pipeWidth, canvas.height - pipe[1] + pipeGap);

      // give 1 point & create new pipe
      if(pipe[0] <= -pipeWidth){
        currentScore++;
        pointsound()
        // check if it's the best score
        bestScore = Math.max(bestScore, currentScore);
        
        // remove & create new pipe
        pipes = [...pipes.slice(1), [pipes[pipes.length-1][0] + pipeGap + pipeWidth, pipeLoc()]];
        console.log(pipes);
      }
    
      // if hit the pipe, end
      if ([
        pipe[0] <= cTenth + size[0], 
        pipe[0] + pipeWidth >= cTenth, 
        pipe[1] > flyHeight || pipe[1] + pipeGap < flyHeight + size[1]
      ].every(elem => elem)) {
        deathsound()
        gamePlaying = false;
        setup();
      }
    })
  }
  // draw bird
  if (gamePlaying) {
    ctx.drawImage(img, 1280, Math.floor((index % 9) / 3) * size[1], ...size, cTenth, flyHeight, ...size);
    flight += gravity;
    flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);
  } else {
    ctx.drawImage(img, 1280, Math.floor((index % 9) / 3) * size[1], ...size, ((1436 / 2) - size[0] / 2), flyHeight, ...size);
    flyHeight = (canvas.height / 2) - (size[1] / 2);
      // text accueil
    ctx.fillText(`Best score : ${bestScore}`, 595, 245);
    ctx.fillText('Click to play', 600, 515);
    ctx.font = "bold 30px courier";
  }

  document.getElementById('bestScore').innerHTML = `Best : ${bestScore}`;
  document.getElementById('currentScore').innerHTML = `Current : ${currentScore}`;

  // tell the browser to perform anim
  window.requestAnimationFrame(render);
}

// launch setup
setup();
img.onload = render;

// start game
document.addEventListener('click', () => gamePlaying = true);
window.onclick = () => flight = jump;



const cursor = document.querySelector('.cursor');
var links = document.getElementsByTagName('a');

document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")            //expliquer dans cv.js
})

document.addEventListener('click', ()=>{
  cursor.classList.add('expand');

  setTimeout(()=>{
      cursor.classList.remove("expand");
  }, 500);
})

document.addEventListener('click', ()=>{
  clicksound()
})