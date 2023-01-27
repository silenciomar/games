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

window.ondevicemotion = getTruth