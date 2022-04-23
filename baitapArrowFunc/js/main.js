const colourList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];

const colourButton = () => {
  let content = "";
  for (let i in colourList) {
    content += `<button class="color-button ${colourList[i]}"   ></button>`;
  }
  document.getElementById("colorContainer").innerHTML = content;
};
colourButton();

let house = document.getElementById("house");
let pickColours = document.getElementsByClassName("color-button");
for (let i = 0; i < pickColours.length; i++) {
  pickColours[i].addEventListener("click", changeColour(colorList[i], i));
}

const changeColour = (a, b) => {
  for (let i in pickColours) {
    pickColours[i].classList.remove("active");
    pickColours[e].classList.add("active");
  }
  house.className = "house " + i;
};
