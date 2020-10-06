window.onload = function() {
    var generator = document.getElementById("textGenerator");
    const textContainerDIV = document.getElementById('text_container');
    const textInput = document.getElementById('text_input');
    const errorCounterSPAN = document.getElementById('error_counter');
    let errorCount = 0;
    var randomText = [
        "ine neit ent eletter lient ener lent tete ener tree neer teet ener neit ree tell ree neerine ere ree ret lier teen nient tell",
        "nient eletter ree treet ene eler neerit neer tree eler nient teel nient lier ener lent ener tell teen nient ree nient lettine",
        "let nient ret iner rel ree lier let neer rent elette let ine neerine nient teen ene relie ree teen elet ine ree elet reet teen"
    ]
    currentText = randomText[null];

    generator.onclick = function() {
        currentText.split('').forEach(character => { 
            const charSpan = document.createElement('span') 
            charSpan.innerText = character 
          }) 
    }

    // code for error count
    textInput.onkeypress = (event) => {
        if (event.key === ' ' || event.key === 'Spacebar') {
            const textContainerWords = textContainerDIV.innerText.split(' ');
            const inputWords = textInput.value.split(' ');

            const lastIndex = inputWords.length - 1;
            const lastWord = inputWords[lastIndex];
            if (textContainerWords[lastIndex]) {
                if (lastWord !== textContainerWords[lastIndex])
                    errorCount++;
            }else errorCount++;
            errorCounterSPAN.innerText = errorCount;
        }
    }

}
