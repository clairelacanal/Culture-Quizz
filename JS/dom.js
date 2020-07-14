window.onload = function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const idTheme = urlParams.get('idTheme');
    let choosenTheme = findChoosenTheme(idTheme);
    console.log(choosenTheme);


    function findChoosenTheme(id){
      
        let reponse;

        if(id === 'item1') {
            reponse = artEtLiterrature;
        }else if(id === 'item2') {
            reponse = geographieEtHistoire;
        }else if(id === 'item3') {
            reponse = musiqueEtFilms;
        }else if(id === 'item4') {
            reponse = natureEtEnvironnement;
        }else if(id === 'item5') {
            reponse = santeEtMedecine;
        }else if(id === 'item6') {
            reponse = sport;
        }
        return reponse;
    }

    
    const items = document.getElementsByClassName('items');
    const itemsArr = Array.from(items);
    itemsArr.forEach(function(item){
        item.addEventListener("click", () => {
            let id = item.id;
            window.location.href = "../HTML/main.html?idTheme=" + id;
        });
    });


    
    function afficherMesThemes(){
        let question = document.getElementById('question'); // DIV qui contient la question à mon QUIZZ
        let reponses = document.getElementById('reponses'); // DIV qui contient les réponses à mon QUIZZ
        let questionReponse = choosenTheme[0];

        question.innerHTML = questionReponse.poserQuestion;
        reponses.innerHTML = questionReponse.reponsesPossibles;
    }
    afficherMesThemes();
    
    
    function gagnerUneMedaille(){
    
    }
    
    function gagnerLaCoupe(){
    
    }









}









