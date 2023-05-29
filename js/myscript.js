
const playButton = document.querySelector('header button.button-play');

playButton.addEventListener(('click'), function(){

    startNewGame();
});

function startNewGame(){
    const gridElement = document.querySelector('div.grid');
    const level = parseInt(document.getElementById('level-select').value);

    let cellsNumber = 0;
    let cellsClass;

    if (level === 0){
        cellsNumber = 100;
        cellsClass = 'cell-easy';
    } else if (level === 1){
        cellsNumber = 81;
        cellsClass = 'cell-medium';
    } else {
        cellsNumber = 49;
        cellsClass = 'cell-hard';
    }

    const bombList = createdRandomListNumber(cellsNumber,0,16)
    console.log(bombList)

    gridElement.innerHTML = "";

    let gameover = false

    for (let index = 0; index < cellsNumber; index++) {
        const newCell = createElement('div','cell '+ cellsClass,
                        `<p>${index + 1}</p>`);

        let finalScore = 0

        newCell.addEventListener('click', function(){
            if(gameover == false){
                if(bombList.includes(index + 1)){
                    this.classList.add('explosion'); // this === newCell
                    alert("Hai perso partita finita")
                    gameover = true
                }else{
                    this.classList.add('save'); // this === newCell
                    finalScore=finalScore+1
                }
            }
        });

        gridElement.appendChild(newCell);
    }
}



//FUNCTION//

/**
 * Function that generates a random number between two value included
 * 
 * @param {number} maxNumber Max number included in the gap 
 * @param {number} minNumber Min number included in the gap
 * @returns a random number in the chosen gap
 */
function createdRandomNumber(maxNumber,minNumber){
    const randomNumber = Math.floor(Math.random()*(maxNumber-minNumber +1)+minNumber);

    return randomNumber;
}



/**
 * Function that creates a custom HTML element with the given tag and classes (as a string)
 *
 * @param {string} tagName The tag of the element to be created as a string
 * @param {string} className The classes of the element to be created as a string
 * @param {string} htmlContent The content of the element to be created as a string, including html tags.
 */
function createElement(tagName, className, htmlContent){
    const htmlElement = document.createElement(tagName);
    htmlElement.className = className;
    htmlElement.innerHTML = htmlContent;
    return htmlElement;
}



/**
 * Function that return a random list of number all different
 * 
 * @param {number} maxNumber Max number of the gap
 * @param {number} minNumber Min number of the gap
 * @param {number} elements Number of the elements in the list
 * @returns random list of number all different
 */
function createdRandomListNumber(maxNumber,minNumber,elements){
    const numberList=[];

    if((maxNumber - minNumber) < elements){
        return [];
    }

    while(numberList.length < elements){
        const randomNumber=createdRandomNumber(maxNumber,minNumber)

        if(!numberList.includes(randomNumber)){
            numberList.push(randomNumber);
        }
    }
    return numberList
}




