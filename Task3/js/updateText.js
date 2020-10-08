window.onload = function () {
    var generator = document.getElementById("textGenerator");
    const textContainerDIV = document.getElementById('text_container');
    const textInput = document.getElementById('text_input');
    const errorCounterSPAN = document.getElementById('error_counter');
    const accuracyCounterSPAN = document.getElementById('accuracy_counter');
    let errorCount = 0;
    let total_errors = 0;
    let charTyped = 0;
    var correctTyped = 0;
    var randomText = [
        "ine neit ent eletter lient ener lent tete ener tree neer teet ener neit ree tell ree neerine ere ree ret lier teen nient tell",
        "nient eletter ree treet ene eler neerit neer tree eler nient teel nient lier ener lent ener tell teen nient ree nient lettine",
        "let nient ret iner rel ree lier let neer rent elette let ine neerine nient teen ene relie ree teen elet ine ree elet reet teen"
    ]

    generator.onclick = function () {
        let textLength = Math.floor(Math.random() * (randomText.length));
        currentText = randomText[textLength];
       
        textInput.value = ''
        textContainerDIV.innerText = ''
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
        inputWords.forEach((char, index) => {
             
            let typedChar = textContainerWords[index] 
            
            if(typedChar !== char) { 
                    errorCount++;
             } 
            
            
        });
        console.log(errorCount);
        
            errorCounterSPAN.innerText = errorCount;
            let accuracy = ((charTyped-errorCount) / charTyped) * 100; 
            accuracyCounterSPAN.innerText = Math.round(accuracy); 
       
        }

}
