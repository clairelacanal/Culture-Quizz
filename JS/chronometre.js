
let counter = 21;
let intervalId;


     intervalId = setInterval(() => {
        counter--;
        afficherCouleur()
        arretChrono()
      }, 1000);

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
    
    
    


function arretChrono() {
    const buttonValider = document.getElementById('button');

    if( counter === 0){
        buttonValider.innerHTML = "Trop tard !";
        buttonValider.style.backgroundColor = "red";
        buttonValider.style.color = "white";
        afficherBonneReponse();
        buttonValider.onclick = function() {
            stopChrono();
            questionSuivante();
            changeEtatBouton();
        } 
    }
}

function stopChrono() {
    clearInterval(intervalId);
}

function afficherBonneReponse() {
   verifieReponse(); 
}

