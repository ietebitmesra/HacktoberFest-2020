window.onload = function () {
    var generator = document.getElementById("textGenerator");
    const textContainerDIV = document.getElementById('text_container');
    const textInput = document.getElementById('text_input');
    const errorCounterSPAN = document.getElementById('error_counter');
    const accuracyCounterSPAN = document.getElementById('accuracy_counter');
    var errorCount = 0;
    var temp_mistakes =0;
    var total_errors = 0;
    var charTyped = 0;
    var randomText = [
        "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?",
        "The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.",
        "Very few castaways can claim to have survived so long at sea as Mr. Patel, and none in the company of an adult Bengal tiger.",
        "Real courage is when you know you’re licked before you begin, but you begin anyway and see it through no matter what.",
        "It’s the possibility of having a dream come true that makes life interesting.",
        "It’s only after we’ve lost everything that we’re free to do anything.",
        "Recovering from suffering is not like recovering from a disease. Many people don’t come out healed; they come out different.",
        "It is a great misfortune to be alone, my friends; and it must be believed that solitude can quickly destroy reason.",
        "Some birds are not meant to be caged, that's all. Their feathers are too bright, their songs too sweet and wild. So you let them go, or when you open the cage to feed them they somehow fly out past you. And the part of you that knows it was wrong to imprison them in the first place rejoices, but still, the place where you live is that much more drab and empty for their departure.",
        "The goal isn’t to live forever, the goal is to create something that will.",
        "Harry Potter was a highly unusual boy in many ways. For one thing, he hated the summer holidays more than any other time of year. For another, he really wanted to do his homework, but was forced to do it in the dead of the night. And he also happened to be a wizard.",
        "Ed likes seals sleek as silk. Fiji fields aid all feels adelia sail idle alkali seas said eddie.",
        "It is late. Kate strolls out of a dark forest. Kate took a leaf for Dad. Kate also took a daffodil for Flor.",
        "What lies behind us and what lies before us are small matters compared to what lies within us.",
        "You will never change your life until you change something you do daily. The secret of yor success is found in your daily routine."

    ]
    generator.onclick = function () {
        let textLength = Math.floor(Math.random() * (randomText.length));
        currentText = randomText[textLength];
        while(currentText == textContainerDIV.innerText) {
          textLength = Math.floor(Math.random() * (randomText.length));
          currentText = randomText[textLength];
        }
        textInput.value = ''
        errorCounterSPAN.innerText = 0
        accuracyCounterSPAN.innerText = 100+'%'
        textContainerDIV.innerText = ''
        total_errors=0
        charTyped=0


        currentText.split('').forEach(character => {
            const charSpan = document.createElement('span')
            //console.log(character);

            charSpan.innerText = character
            textContainerDIV.append(charSpan)
        })
    }


    // code for error count and accuracy
     textInput.onkeypress = () => {

        charTyped++;
        textContainerWords = textContainerDIV.innerText.split('');
        inputWords = textInput.value.split('');
        str='';
        inputWords.forEach((char, index) => {

            let typedChar = textContainerWords[index]

            if(typedChar !== char) {
                    errorCount++;
                    textInput.style.color='#ff0000';
             }
             else{
                    textInput.style.color='#000000';
             }


        });

            errorCounterSPAN.innerText = errorCount;
            if(errorCount > temp_mistakes){
                total_errors++;
                //errorCount = temp_mistakes;
                //total_errors+=temp_mistakes;
            }
            let accuracy = ((charTyped-total_errors) / charTyped) * 100;
            temp_mistakes=errorCount;
            errorCount=0;
            console.log(total_errors);
            accuracyCounterSPAN.innerText = Math.round(accuracy)+'%';

        }

}
