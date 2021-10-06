/*For themes*/
const position = [".15rem", "1.3rem", "3rem"];
const classThemes = ["", "theme-light", "theme-purple"];
const themes = document.querySelectorAll(".calc__label"),
  body = document.querySelector("body");

themes.forEach((theme, index) => {
  theme.addEventListener("click", () => {
    document.documentElement.style.setProperty(
      "--theme-position",
      position[index]
    );
    body.setAttribute("class", classThemes[index]);
  });
});

/*For interaction CALC*/
const buttons = document.querySelectorAll(".calc__btn"),
  screenResult = document.querySelector(".calc__result");

const buttonActions = {
  delete: () => {
    const length = operation.length;
    if (length > 1) {
      operation = operation.slice(0, length - 1);
      //screenResult.textContent = operation;
    } else {
        operation = 0
    }
  },
  clear: () => (operation = 0),
  solve: () => {
    operation = eval(operation);
    //screenResult.textContent = operation;
  },
};
let operation = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnContent = btn.getAttribute('data-calc');
    if (!Object.keys(buttonActions).includes(btnContent)) {
        operation += btnContent;
      screenResult.textContent = operation;
    } else {
      buttonActions[btnContent]();
      screenResult.textContent = operation;
    }
  });
});
