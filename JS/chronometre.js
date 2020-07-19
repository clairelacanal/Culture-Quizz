
let counter = 21;
let intervalId;

function afficherCouleur() {
    let gridSelected;
    if (counter < 21) {
        let numGrid = 21 - counter;
        let gridName = "#grid" + numGrid;
        gridSelected = document.querySelector(gridName);
    }

    if(counter < 21 && counter > 14) {
        gridSelected.style.backgroundColor = 'green';
    }else if(counter <= 14 && counter > 7 ) {
        gridSelected.style.backgroundColor = 'orange';
    }else if(counter <= 7 && counter > 0) {
        gridSelected.style.backgroundColor = 'red';
    }
}

function buttonChangementText() {
    const buttonValider = document.getElementById('button');
    if( counter === 0){
        buttonValider.innerHTML = "Trop tard !";
        buttonValider.style.backgroundColor = "red";
        buttonValider.style.color = "white";
        afficherReponseChrono0();
        
        
    }
}

function stopChrono() {
    let btn = document.getElementById('button');
    btn.onclick = function() {
        clearInterval(intervalId);
    }
}

function resetChrono() {
    const grids = document.querySelectorAll('.grid');
        const gridsArr = Array.from(grids);
        gridsArr.forEach(function (el) {
            if(counter = 21) {
                el.style.backgroundColor = 'transparent';
            } 
        })   
}

function startChrono() {
    resetChrono() // reset des cases

    // demarre mon anim
    intervalId = setInterval(() => {
        counter--;
        afficherCouleur()
        buttonChangementText()
    }, 1000);
}
startChrono()



function afficherReponseChrono0() {
    let div = document.getElementById('annonce-rep')
    let choosenQuestionResponses = findAllQuestionResponses(idTheme);
    let questionReponse = choosenQuestionResponses[indexQuestion];
    let bonneReponse = questionReponse.indexOfReponse;
    let reponsesProposees = questionReponse.reponsesPossibles;

    if(counter === 0) {
        div.innerHTML = 'La bonne réponse est :' + " " + reponsesProposees[bonneReponse];
        div.style.color = 'red';
        div.style.fontWeight = 700;
    }
}

function buttonQuestionSuivante() {
    const buttonTropTard = document.getElementById('button');
    buttonTropTard.innerHTML = "Question suivante";
    buttonTropTard.removeEventListener("click", verifieReponse);
    buttonTropTard.addEventListener("click",questionSuivante);
}
afficherReponseChrono0();

