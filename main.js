function playSound(audioSelector) {
  const element = document.querySelector(audioSelector);
  if (element && element.localName === "audio") {
    element.play();
  } else {
    console.log("Element Not found");
  }
}

const list = document.querySelectorAll(".tecla");

for (let count = 0; count < list.length; count++) {
  const key = list[count];
  const instrument = key.classList[1];

  key.onclick = function () {
    playSound(`#som_${instrument}`);
  };

  key.onkeydown = function (e) {
    if (e.code === "Space" || e.code === "Enter") {
      key.classList.add("ativa");
    }
  };
  key.onkeyup = function () {
    key.classList.remove("ativa");
  };
}
