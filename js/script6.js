function mobile() {
    var audio1 = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-interface-zoom-890.mp3');
    audio1.loop = false;
    audio1.play(); 
}
function ordinateur() {
    var audio2 = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3");
    audio1.loop = false;
    audio1.play(); 
}

function dasibium() {
  document.querySelector('input[type="checkbox"]').checked = !document.querySelector('input[type="checkbox"]').checked;
  let sound1 = "https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-interface-zoom-890.mp3";
  let sound2 = "https://assets.mixkit.co/sfx/preview/mixkit-game-quick-warning-notification-268.mp3";
  let sound3 = "https://assets.mixkit.co/sfx/preview/mixkit-tech-click-1140.mp3";
  let sound4 = "https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3";
  let sound5 = "https://assets.mixkit.co/sfx/preview/mixkit-fast-sci-fi-bleep-903.mp3";
  let sound6 = "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-2521.mp3";
  let sound7 = "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-confirmation-2520.mp3";
  let audio = new Audio(document.querySelector('input[type="checkbox"]').checked ? sound4: sound6);
  if (!audio.ended) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio.play();  
}

function projets() {
  document.querySelector('input[type="checkbox"]').checked = !document.querySelector('input[type="checkbox"]').checked;
  let sound1 = "https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-interface-zoom-890.mp3";
  let sound2 = "https://assets.mixkit.co/sfx/preview/mixkit-game-quick-warning-notification-268.mp3";
  let sound3 = "https://assets.mixkit.co/sfx/preview/mixkit-tech-click-1140.mp3";
  let sound4 = "https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3";
  let sound5 = "https://assets.mixkit.co/sfx/preview/mixkit-fast-sci-fi-bleep-903.mp3";
  let sound6 = "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-2521.mp3";
  let sound7 = "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-confirmation-2520.mp3";
  let audio = new Audio(document.querySelector('input[type="checkbox"]').checked ? sound6: sound6);
  /*document.getElementById('projets').style.animation="hud-3d 4s linear infinite";*/
  document.getElementById("middleCircle2").animate(
  [
    { transform: 'rotate(-120deg)' }
  ], {
    duration: 500,
	easing: 'ease-in-out',
	fill: 'forwards',
    iterations: 1
  }
);
  document.getElementById("innerCircle2").animate(
  [
    { transform: 'rotate(-150deg)' }
  ], {
    duration: 500,
	easing: 'ease-in-out',
	fill: 'forwards',
    iterations: 1
  }
);
  document.getElementById("outerCircle2").animate(
  [
    { transform: 'rotate(360deg)' }
  ], {
    duration: 500,
	easing: 'ease-in-out',
	fill: 'forwards',
    iterations: 1
  }
);
  let das = document.querySelector('input[type="checkbox"]');
  if (das.checked) {
    das.checked = false;
  }
  if (!audio.ended) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio.play();
  setTimeout(ouvrepageprojets, 1000);  
}

function boutique() {
  document.querySelector('input[type="checkbox"]').checked = !document.querySelector('input[type="checkbox"]').checked;
  let sound1 = "https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-interface-zoom-890.mp3";
  let sound2 = "https://assets.mixkit.co/sfx/preview/mixkit-game-quick-warning-notification-268.mp3";
  let sound3 = "https://assets.mixkit.co/sfx/preview/mixkit-tech-click-1140.mp3";
  let sound4 = "https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3";
  let sound5 = "https://assets.mixkit.co/sfx/preview/mixkit-fast-sci-fi-bleep-903.mp3";
  let sound6 = "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-2521.mp3";
  let sound7 = "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-confirmation-2520.mp3";
  let audio = new Audio(document.querySelector('input[type="checkbox"]').checked ? sound6: sound6);
  document.getElementById("middleCircle3").animate(
  [
    { transform: 'rotate(-120deg)' }
  ], {
    duration: 500,
	easing: 'ease-in-out',
	fill: 'forwards',
    iterations: 1
  }
);
  document.getElementById("innerCircle3").animate(
  [
    { transform: 'rotate(-150deg)' }
  ], {
    duration: 500,
	easing: 'ease-in-out',
	fill: 'forwards',
    iterations: 1
  }
);
  document.getElementById("outerCircle3").animate(
  [
    { transform: 'rotate(360deg)' }
  ], {
    duration: 500,
	easing: 'ease-in-out',
	fill: 'forwards',
    iterations: 1
  }
);
  let das = document.querySelector('input[type="checkbox"]');
  if (das.checked) {
    das.checked = false;
  }
  if (!audio.ended) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio.play();
  setTimeout(ouvrepageboutique, 1000);  
}

function ouvrepageprojets() {
	window.open("https://www.3dvf.com/", "_self");
}

function ouvrepageboutique() {
	window.open("https://www.ebay.fr/", "_self");
}