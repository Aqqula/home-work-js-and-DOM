//#3ecfe9

const changeColor = ({
  target: {
    dataset: { bgColor, color },
  },
}) => {
  style.backgroundColor = bgColor;
  style.dataset.color = color;
};

const changeDirection = ({
  target: {
    dataset: { flexDirection },
  },
}) => {
  box.style.flexDirection = flexDirection;
};

const btns = document.querySelectorAll(".wrapper>button");
const [box] = document.getElementsByClassName("box");
const btnTest = document.getElementById("test");

for (const btn of btns) {
  btn.addEventListener("click", changeDirection);
}

for (const btn of btns) {
  btn.addEventListener("click", changeColor);
}
