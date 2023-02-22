let output = document.getElementById('output')

let words = [
    'WE CREATE COZINESS  FOR  YOUR APARTMENT'
]
let charTurn = 0
let wordTurn = 0
printWord()
function printWord(){
    if(charTurn <= words[wordTurn].length){
        output.innerHTML = words[wordTurn].substr(0, charTurn)
        charTurn++
        setTimeout(printWord, 200)
    }else{
        setTimeout(deleteWord, 500)
    }
    
}

function deleteWord(){
    if(charTurn >= 0){
        output.innerHTML = words[wordTurn].substr(0, charTurn)
        charTurn--
        setTimeout(deleteWord, 100)
    }else{
        if(wordTurn < words.length-1){
            wordTurn++
        }else{
            wordTurn = 0
        }
        charTurn = 0
        setTimeout(printWord, 200)
    }
   
}