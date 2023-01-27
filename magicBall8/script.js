const ball = document.querySelector('.ball');
const text = document.querySelector('.triangle__text');

// let randomNum = Math.trunc(Math.random() * 6) + 1;
const phraseTruth = {
  1: 'Yes',
  2: 'No',
  3: 'Never',
  4: 'Always',
  5: 'Maybe'
}

let getTruth = () => {
  let randomNum = Math.trunc(Math.random() * 5) + 1;

  text.textContent = phraseTruth[randomNum];
}

ball.addEventListener('click', getTruth)

var myShakeEvent = new Shake({
  threshold: 15, // optional shake strength threshold
  timeout: 1000 // optional, determines the frequency of event generation
});

myShakeEvent.start();

window.addEventListener('shake', getTruth, false)

window.removeEventListener('shake', getTruth, false)

myShakeEvent.stop();