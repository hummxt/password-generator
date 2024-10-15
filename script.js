function generatePassword() {
  let str =
    "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&*";
  let password = "";

  for (let i = 0; i < 12; i++) {
    let index = Math.floor(Math.random() * str.length);
    password += str[index];
  }
  return password;
}

let generatorInput = document.getElementById("generator");
generatorInput.value = generatePassword();
let newPassword = document.getElementById("newPass");

newPassword.addEventListener("click", function () {
  generatorInput.value = generatePassword();
});

function copyPassword() {
    var generatorInput = document.getElementById("generator");
    generatorInput.select();
    generatorInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(generatorInput.value);
    alert("Copied the text: " + generatorInput.value);
}