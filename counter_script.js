let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
// console.log(add, subtract);
add.addEventListener("click", function () {
  let op = "+";
  counter(op);
});

subtract.addEventListener("click", function () {
  let op = "-";
  counter(op);
});

function counter(operator) {
  if (operator == "+") {
    // console.log(operator);
    let output = document.querySelector("#output");
    let result = Number(output.innerText) + 1;

    output.innerText = result;
  } else {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) - 1;
    if (result < 0) {
      result = 0;
    }
    output.innerText = result;
  }
}
