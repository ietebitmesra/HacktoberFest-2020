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
        "ine neit ent eletter lient ener lent tete ener tree neer teet ener neit ree tell ree neerine ere ree ret lier teen nient tell",
        "nient eletter ree treet ene eler neerit neer tree eler nient teel nient lier ener lent ener tell teen nient ree nient lettine",
        "let nient ret iner rel ree lier let neer rent elette let ine neerine nient teen ene relie ree teen elet ine ree elet reet teen"
    ]
    generator.onclick = function () {
        let textLength = Math.floor(Math.random() * (randomText.length));
        currentText = randomText[textLength];
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
