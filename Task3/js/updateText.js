window.onload = function () {
  var generator = document.getElementById("textGenerator");
  const textContainerDIV = document.getElementById("text_container");
  const textInput = document.getElementById("text_input");
  const errorCounterSPAN = document.getElementById("error_counter");
  const accuracyCounterSPAN = document.getElementById("accuracy_counter");
  var errorCount = 0;
  var temp_mistakes = 0;
  var total_errors = 0;
  var charTyped = 0;
  var randomText = [
    "ine neit ent eletter lient ener lent tete ener tree neer teet ener neit ree tell ree neerine ere ree ret lier teen nient tell",
    "nient eletter ree treet ene eler neerit neer tree eler nient teel nient lier ener lent ener tell teen nient ree nient lettine",
    "let nient ret iner rel ree lier let neer rent elette let ine neerine nient teen ene relie ree teen elet ine ree elet reet teen",
  ];
  generator.onclick = function () {
    let textLength = Math.floor(Math.random() * randomText.length);
    currentText = randomText[textLength];
    textInput.value = "";
    errorCounterSPAN.innerText = 0;
    accuracyCounterSPAN.innerText = 100 + "%";
    textContainerDIV.innerText = "";
    total_errors = 0;
    charTyped = 0;

    currentText.split("").forEach((character) => {
      const charSpan = document.createElement("span");
      //console.log(character);

      charSpan.innerText = character;
      textContainerDIV.append(charSpan);

      // call the function to start the timer when the 'Generate' button is clicked
      runTime();
    });
  };

  // code for error count and accuracy
  textInput.onkeypress = () => {
    charTyped++;
    textContainerWords = textContainerDIV.innerText.split("");
    inputWords = textInput.value.split("");
    str = "";
    inputWords.forEach((char, index) => {
      let typedChar = textContainerWords[index];

      if (typedChar !== char) {
        errorCount++;
        textInput.style.color = "#ff0000";
      } else {
        textInput.style.color = "#000000";
      }
    });

    errorCounterSPAN.innerText = errorCount;
    if (errorCount > temp_mistakes) {
      total_errors++;
      //errorCount = temp_mistakes;
      //total_errors+=temp_mistakes;
    }
    let accuracy = ((charTyped - total_errors) / charTyped) * 100;
    temp_mistakes = errorCount;
    errorCount = 0;
    console.log(total_errors);
    accuracyCounterSPAN.innerText = Math.round(accuracy) + "%";
  };
};

// CODE FOR TIMER
// function for digital formating of time
function formatTime(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

// code for running time in seconds
function runTime() {
  let runSeconds = 0;
  let countTime = setInterval(() => {
    ++runSeconds;

    let totalSeconds = runSeconds % 60;
    let totalHours = Math.floor(runSeconds / 3600);
    let totalMinutes = Math.floor(runSeconds / 60 - totalHours * 60);

    totalHours = formatTime(totalHours);
    totalMinutes = formatTime(totalMinutes);
    totalSeconds = formatTime(totalSeconds);
    // Displaying the counter in the timer view
    document.querySelector("#hours-passed").innerHTML = totalHours;
    document.querySelector("#minutes-passed").innerHTML = totalMinutes;
    document.querySelector("#seconds-passed").innerHTML = totalSeconds;
  }, 1000);
  // code to stop running time if button is clicked
  var stopButton = document.getElementById("stop-time-button");
  stopButton.addEventListener("click", function (e) {
    e.preventDefault();
    clearInterval(countTime);
    document.querySelector("#hours-passed").innerHTML = formatTime(0);
    document.querySelector("#minutes-passed").innerHTML = formatTime(0);
    document.querySelector("#seconds-passed").innerHTML = formatTime(0);
  });
}
