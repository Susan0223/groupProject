document.addEventListener("DOMContentLoaded", main);

function main() {
  const sock = io();
  const button1 = document.getElementsByClassName('player1Btn')[0];
  const button2 = document.getElementsByClassName('player2Btn')[0];

  var player1Position = 0;
  var player2Position = 0;

  button1.addEventListener('click', function handleClick(event){
    const player1 = document.getElementsByClassName('racer player1')[0];
    const player2 = document.getElementsByClassName('racer player2')[0];
    player1.style.position = 'relative';
    player2.style.position = 'relative';
    player1Position += 20;
    player1.style.left = player1Position + 'px';
    
    sock.emit("click1", {x: player1Position})
    event.preventDefault();
  })

  button2.addEventListener('click', function handleClick(event) {
    const player1 = document.getElementsByClassName('racer player1')[0];
    const player2 = document.getElementsByClassName('racer player2')[0];
    player1.style.position = 'relative';
    player2.style.position = 'relative';
    player2Position += 20;
    player2.style.left = player2Position + 'px';

    event.preventDefault();
    sock.emit("click2", {x: player2Position})
    event.preventDefault();
  });
  sock.on("click1",function(data){
    const player1 = document.getElementsByClassName('racer player1')[0];
    const player2 = document.getElementsByClassName('racer player2')[0];
    player1.style.position = 'relative';
    player2.style.position = 'relative';
    
    player1.style.left = data.x + 'px';
  })
  sock.on("click2",function(data){
    const player1 = document.getElementsByClassName('racer player1')[0];
    const player2 = document.getElementsByClassName('racer player2')[0];
    player1.style.position = 'relative';
    player2.style.position = 'relative';
    player2Position += 20;
    player2.style.left = data.x + 'px';
  })

}