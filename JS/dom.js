window.document.onload = function() {

    function selectTheme(){
        let item1 = document.getElementById('item1'); // THÈMES DE MON QUIZZ
        let item2 = document.getElementById('item2');
        let item3 = document.getElementById('item3');
        let item4 = document.getElementById('item4');
        let item5 = document.getElementById('item5');
        let item6 = document.getElementById('item6');
        
        let reponse;

        if(item1) {
            reponse = artEtLiterrature;
        }else if(item2) {
            reponse = geographieEtHistoire;
        }else if(item3) {
            reponse = musiqueEtFilms;
        }else if(item4) {
            reponse = natureEtEnvironnement;
        }else if(item5) {
            reponse = santeEtMedecine;
        }else if(item6) {
            reponse = sport;
        }
        return reponse;
    }

    selectTheme();
    
    const article = document.getElementById('article');
    article.addEventListener("click", selectTheme {
        article.style.backgroundColor = '#004445';
        article.style.border = '#2c786c';
        article.style.color = '#f8b400';
    });
    
    const button = document.getElementById('button');
    button.addEventListener("click", function( event )  {
    event.target.style.backgroundColor = '#2c786c';
    };
    
    
    function validerReponse(){
        let question = document.getElementById('question'); // DIV qui contient la question à mon QUIZZ
        let reponses = document.getElementByIf('reponses'); // DIV qui contient les réponses à mon QUIZZ
    
    }
    




    function ajouterMarche(){
    
    }
    
    function gagnerUneMedaille(){
    
    }
    
    function gagnerLaCoupe(){
    
    }









}









