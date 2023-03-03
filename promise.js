function generateRandomNumber() {
  var random = Math.floor(Math.random() * 10 + 1);
  return random;
}

function printRandomNumber() {
  var evenNumberPromise = new Promise(function (resolve, reject) {
    var number = generateRandomNumber();

    if (number % 2 == 0) {
      resolve("Even Number as it is: " + number);
    } else {
      reject("Odd Number as it is: " + number);
    }
  });

  evenNumberPromise
    .then((result) => updateAlert(result))
    .catch((err) => updateAlert(err));
}

function updateAlert(text) {
  document.getElementById("alert").innerText = text;
}
