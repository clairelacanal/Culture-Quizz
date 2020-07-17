
let counter = 21;
window.addEventListener("load", function(){

    setInterval(() => {
        counter--;
        afficherCouleur()
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
        if()
    }
    
}); 
