const btns = document.querySelectorAll(".content button");
const radios = document.querySelectorAll('.slides input');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    radios[i].checked = true;
  });
}