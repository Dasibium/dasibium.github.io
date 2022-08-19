const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile.checked) {
    appareil();
  } else {
	appareil();
  	alert("Ordinateur");
  }

function appareil() {
    var audio1 = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-interface-zoom-890.mp3');
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
  document.querySelector('input[type="checkbox2"]').checked = !document.querySelector('input[type="checkbox2"]').checked;
  let sound1 = "https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-interface-zoom-890.mp3";
  let sound2 = "https://assets.mixkit.co/sfx/preview/mixkit-game-quick-warning-notification-268.mp3";
  let sound3 = "https://assets.mixkit.co/sfx/preview/mixkit-tech-click-1140.mp3";
  let sound4 = "https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3";
  let sound5 = "https://assets.mixkit.co/sfx/preview/mixkit-fast-sci-fi-bleep-903.mp3";
  let sound6 = "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-2521.mp3";
  let sound7 = "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-confirmation-2520.mp3";
  let audio = new Audio(document.querySelector('input[type="checkbox2"]').checked ? sound6: sound6);
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
  document.querySelector('input[type="checkbox3"]').checked = !document.querySelector('input[type="checkbox3"]').checked;
  let sound1 = "https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-interface-zoom-890.mp3";
  let sound2 = "https://assets.mixkit.co/sfx/preview/mixkit-game-quick-warning-notification-268.mp3";
  let sound3 = "https://assets.mixkit.co/sfx/preview/mixkit-tech-click-1140.mp3";
  let sound4 = "https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3";
  let sound5 = "https://assets.mixkit.co/sfx/preview/mixkit-fast-sci-fi-bleep-903.mp3";
  let sound6 = "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-2521.mp3";
  let sound7 = "https://assets.mixkit.co/sfx/preview/mixkit-high-tech-bleep-confirmation-2520.mp3";
  let audio = new Audio(document.querySelector('input[type="checkbox3"]').checked ? sound6: sound6);
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