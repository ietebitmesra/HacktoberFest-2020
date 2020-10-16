window.onload = function () {
  var generator = document.getElementById("textGenerator");
  const textContainerDIV = document.getElementById("text_container");
  const textInput = document.getElementById("text_input");
  const errorCounterSPAN = document.getElementById("error_counter");
  const accuracyCounterSPAN = document.getElementById("accuracy_counter");
  const wordsperminuteSPAN = document.getElementById("wpm_counter");

  var errorCount = 0;
  var temp_mistakes = 0;
  var total_errors = 0;
  var charTyped = 0;
  var randomText = [
    "The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.",
    "Very few castaways can claim to have survived so long at sea as Mr. Patel, and none in the company of an adult Bengal tiger.",
    "Real courage is when you know you’re licked before you begin, but you begin anyway and see it through no matter what.",
    "Recovering from suffering is not like recovering from a disease. Many people don’t come out healed; they come out different.",
    "It is a great misfortune to be alone, my friends; and it must be believed that solitude can quickly destroy reason",
    "It is late. Kate strolls out of a dark forest. Kate took a leaf for Dad. Kate also took a daffodil for Flor.",
    "You will never change your life until you change something you do daily. The secret of your success is found in your daily routine.",
    "India is not, as people keep calling it, an underdeveloped country, but rather, in the context of its history and cultural heritage, a highly developed one in an advanced state of decay.",
    "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
    "I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.",
    "If I can't make it through one door, I'll go through another door- or I'll make a door. Something terrific will come no matter how dark the present.",
    "For neither good nor evil can last for ever; and so it follows that as evil has lasted a long time, good must now be close at hand.",
    "The most perceptive character in a play is the fool, because the man who wishes to seem simple cannot possibly be a simpleton.",
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    "When you are courting a nice girl, an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity.",
    "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
    "We keep moving forward, opening new doors, and doing new things, because we’re curious and curiosity keeps leading us down new paths.",
  ];

let currentText;

  generator.onclick = function () {
    document.querySelector("#hours-passed").innerHTML = formatTime(0);
    document.querySelector("#minutes-passed").innerHTML = formatTime(0);
    document.querySelector("#seconds-passed").innerHTML = formatTime(0);
    
    let textLength = Math.floor(Math.random() * randomText.length);
    currentText = randomText[textLength];
    while (currentText == textContainerDIV.innerText) {
      textLength = Math.floor(Math.random() * randomText.length);
      currentText = randomText[textLength];
    }
    textInput.value = "";
    errorCounterSPAN.innerText = 0;
    accuracyCounterSPAN.innerText = 100 + "%";
    wordsperminuteSPAN.innerText = 0 + " WPM" ;
    textContainerDIV.innerText = "";
    total_errors = 0;
    charTyped = 0;

    document.getElementById("text_input").setAttribute("rows", "3");

    currentText.split("").forEach((character) => {
      const charSpan = document.createElement("span");
      //console.log(character);

      charSpan.innerText = character;
      textContainerDIV.append(charSpan);


    });
    // add the code to start the timer when the 'Generate' button is clicked
      runSeconds=0;
      runTime();





  // code for error count and accuracy
  textInput.onkeypress = () => {
    ++charTyped;
    textContainerWords = textContainerDIV.innerText.split("");
    inputWords = textInput.value.split("");


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
    }
    let accuracy = ((charTyped - total_errors) / charTyped) * 100;
    temp_mistakes = errorCount;
    errorCount = 0;

    accuracyCounterSPAN.innerText = Math.round(accuracy) + "%";

    if(runSeconds)
      wpm= (((charTyped/5) - total_errors)*60)/(runSeconds);

    if(wpm < 0 || runSeconds === 0)
    wordsperminuteSPAN.innerText = "0 WPM";
    else
    wordsperminuteSPAN.innerText = Math.round(wpm) + " WPM";


    //stop the time when finished writing

    let inputLength = textInput.value.length+1


    if(textContainerDIV.innerText.length === inputLength){
          clearInterval(countTime);
    }



  };
  };
  var runSeconds = 0;
// function for digital formating of time
function formatTime(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}
let countTime;

  function runTime() {

     countTime = setInterval(() => {
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
  }

};
