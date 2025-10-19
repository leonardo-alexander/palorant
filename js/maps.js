const mapData = [
  {
    image: "../media/Ascent_layout.jpg",
    title: "Ascent",
    description:
      "An open playground for small wars of position and attrition divide two sites on Ascent. Each site can be fortified by irreversible bomb  doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.",
  },
  {
    image: "../media/Bind_layout.jpg",
    title: "Bind",
    description:
      "Two sites. No middle. Gotta pick left or right. What’s it going to be then? Both offer direct paths for attackers and a pair of one-way  teleporters make it easier to flank",
  },
  {
    image: "../media/Haven_layout.jpg",
    title: "Haven",
    description:
      "Beneath a forgotten monastery, a clamour emerges from rival Agents clashing to control three sites. There’s more territory to control, but defenders can use the extra real estate for aggressive pushes.",
  },
  {
    image: "../media/IceBox_layout.jpg",
    title: "Ice Box",
    description:
      "Your next battleground is a secret Kingdom excavation site  overtaken by the arctic. The two plant sites protected by snow and metal require some horizontal finesse. Take advantage of the ziplines and  they’ll never see you coming.",
  },
  {
    image: "../media/Split_layout.jpg",
    title: "Split",
    description:
      "If you want to go far, you’ll have to go up. A pair of sites split by an elevated center allows for rapid movement using two rope  ascenders. Each site is built with a looming tower vital for control.  Remember to watch above before it all blows sky-high.",
  },
];

const img = document.getElementById("image");
const title = document.getElementById("title");
const desc = document.getElementById("desc");

const buttons = document.querySelectorAll(".map");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const map = mapData[index];
    img.src = map.image;
    title.innerHTML = map.title;
    desc.innerHTML = map.description;
  });
});
