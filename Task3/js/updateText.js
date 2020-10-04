window.onload = function() {
    var generator = document.getElementById("textGenerator");
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
}