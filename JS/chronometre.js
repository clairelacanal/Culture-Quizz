let counter = {};
window.addEventListener("load", function () {
    //COUNTDOWN IN SECONDS
    counter.end = 21;

    //Mon container
    counter.div = document.getElementById("compteur-numero");

    //Start if no past end date
    if (counter.end > 0) {
        counter.ticker = setInterval(function () {
            //Stop if passed end time
            counter.end--;
            if (counter.end <= 0) {
                clearInterval(counter.ticker);
                counter.end = "Perdu";
                document.getElementById("compteur-numero").style.color = '#e74c3c';
                document.getElementById("compteur-numero").style.fontSize = '30px';
            }

            //Calculate remaining time
            let count = counter.end;

            //Update HTML
            counter.div.innerHTML = counter.end;
        }, 1000);
    }
})
