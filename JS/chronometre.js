
let counter = 21;
let intervalId;


     intervalId = setInterval(() => {
        counter--;
        afficherCouleur()
        buttonChangementText()
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

function buttonChangementText() {
    const buttonValider = document.getElementById('button');
    if( counter === 0){
        buttonValider.innerHTML = "Trop tard !";
        buttonValider.style.backgroundColor = "red";
        buttonValider.style.color = "white";
        
    }
}

function stopChrono() {
    clearInterval(intervalId);
}

function resetChrono() {
    const grids = document.querySelectorAll('.grid');
        const gridsArr = Array.from(grids);
        gridsArr.forEach(function (el) {
           el.style.backgroundColor = 'transparent'; 
        })   
}




function afficherBonneReponse() {
   verifieReponse(); 
}



