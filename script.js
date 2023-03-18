const num1 = document.querySelector('input[name="num1"]');

const num2 = document.querySelector('input[name="num2"]');

const output = document.querySelector('input[name="output"]');

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  output.value = parseInt(num1.value) + parseInt(num2.value);
});
