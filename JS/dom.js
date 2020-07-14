window.document.onload = function() {

    function selectTheme(){
        let item1 = document.getElementById('item1'); // THÈMES DE MON QUIZZ
        let item2 = document.getElementById('item2');
        let item3 = document.getElementById('item3');
        let item4 = document.getElementById('item4');
        let item5 = document.getElementById('item5');
        let item6 = document.getElementById('item6');

        let question = document.getElementById('question'); // DIV qui contient la question à mon QUIZZ
        let reponses = document.getElementByIf('reponses'); // DIV qui contient les réponses à mon QUIZZ
    
        if()
        
  
        
        
    }
    selectTheme();
    
    
    
    function validerTheme(){
        let boutton = document.getElementById('button');
        boutton.addEventListener("mouseover", function( event )  {
        event.target.style.backgroundColor = 'blue';
        }
    }
    
    validerTheme(); 

    
    function validerReponse(){
    
    }
    
    function ajouterMarche(){
    
    }
    
    function gagnerUneMedaille(){
    
    }
    
    function gagnerLaCoupe(){
    
    }









}











if(item1) {
    question.innerHTML = item1;
}else if(item2){
    question.innerHTML = item2;
}else if(item3){
    question.innerHTML = item3;
}else if(item4){
    question.innerHTML = item4;
}else if(item5){
    question.innerHTML = item5;
}else if(item6){
    question.innerHTML = item6;
}