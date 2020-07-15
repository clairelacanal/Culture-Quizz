window.onload = function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const idTheme = urlParams.get('idTheme');
    let choosenQuestionResponses = findAllQuestionResponses(idTheme);
    let indexQuestion = 0;
    let questionReponse = choosenQuestionResponses[indexQuestion];
    afficherQuestion();
    changeBoutonValider();



    function findAllQuestionResponses(id){
        console.log(id);
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
            reponse = sport;
        }else if(id === 'item6') {
            reponse = santeEtMedecine;
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




    
    function afficherQuestion(){
        let questionEl = document.getElementById('question'); // DIV qui contient la question à mon QUIZZ
        let reponsesEl = document.getElementById('rep-possibles'); // DIV qui contient les réponses à mon QUIZZ
        
        questionEl.innerHTML = "";
        reponsesEl.innerHTML = "";

        let reponsesPossibles = questionReponse.reponsesPossibles;

        questionEl.innerHTML = questionReponse.poserQuestion;

        for(let i = 0; i < reponsesPossibles.length; i++) {
            let div = document.createElement('div');
            div.setAttribute("class", "reponse");
            reponsesEl.appendChild(div);

            let input = document.createElement('input');
            input.setAttribute("type", "radio");
            input.setAttribute("id", "item-" + (i+1));
            input.setAttribute("name", "reponse");
            input.value = i;
            div.appendChild(input);

            let label = document.createElement('label');
            label.setAttribute("for", i);
            label.innerHTML = reponsesPossibles[i];
            div.appendChild(label);
        }
    }


    function changeBoutonValider() {
        const buttonValider = document.getElementById('button');
        buttonValider.innerHTML = "Je valide";
        buttonValider.addEventListener("click", () => {
            verifieReponse();
            buttonValider.innerHTML = "Question suivante";
            buttonValider.addEventListener("click", () => {
                questionSuivante();
            });
        });
    }

    function verifieReponse() {
        let bonneReponse = questionReponse.indexOfReponse;
        let reponsesProposees = questionReponse.reponsesPossibles;

        document.getElementById('annonce-rep').innerHTML = "";
        let indexReponseChoisie = document.querySelector('input[name="reponse"]:checked').value;
        
        if(bonneReponse == indexReponseChoisie) {
            let div = document.getElementById('annonce-rep');
            div.innerHTML = 'Bonne réponse !';
            div.style.color = 'green';
        } else {
            let div = document.getElementById('annonce-rep');
            div.innerHTML = 'La bonne réponse est :' + reponsesProposees[bonneReponse];
            div.style.color = 'red';
        }
    }
    

    

    function questionSuivante(){
        indexQuestion++;
        questionReponse = choosenQuestionResponses[indexQuestion];
        afficherQuestion();
        changeBoutonValider();
    }

    // function checkQuestionSuivante() {
    //     let result;
    //     let buttonSuivant = document.getElementById('suivant');
    //     buttonSuivant.onclick = function() {
    //         questionSuivante();
    //     } 
    //     return result;
    // }
    // checkQuestionSuivante();
    
}









