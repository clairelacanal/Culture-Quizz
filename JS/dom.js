

    
    const urlParams = new URLSearchParams(window.location.search);
    const idTheme = urlParams.get('idTheme');
    let questionReponse;
    let indexQuestion = 0;
    let choosenQuestionResponses;
    let questionAValider;
    let score = 0;
    if (idTheme) {
        choosenQuestionResponses = findAllQuestionResponses(idTheme);
        questionReponse = choosenQuestionResponses[indexQuestion];
        afficherQuestion();
        questionAValider = true;
        changeEtatBouton();
    }

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
        stopChrono();
       
    }


    function changeEtatBouton() {
        const buttonValider = document.getElementById('button');
        if (questionAValider) {
            buttonValider.innerHTML = "Je valide";
            buttonValider.removeEventListener("click", questionSuivante);
            buttonValider.addEventListener("click", verifieReponse);
            
            
        } else {
            buttonValider.innerHTML = "Question suivante";
            buttonValider.removeEventListener("click", verifieReponse);
            buttonValider.addEventListener("click",questionSuivante);
            
        }
    }

    function verifieReponse() {
        let bonneReponse = questionReponse.indexOfReponse;
        let reponsesProposees = questionReponse.reponsesPossibles;
        let indexReponseChoisie = document.querySelector('input[name="reponse"]:checked').value;
        
       
        if(bonneReponse == indexReponseChoisie) {
            let div = document.getElementById('annonce-rep');
            div.innerHTML = 'Bonne réponse !';
            div.style.color = 'green';
            div.style.fontWeight = 700;
            div.style.textAlign = "center";
            score++;
            draw();
            
    
        } else {
            let div = document.getElementById('annonce-rep');
            div.innerHTML = 'La bonne réponse est :' + " " + reponsesProposees[bonneReponse];
            div.style.color = 'red';
            div.style.fontWeight = 700;
            div.style.textAlign = "center";
             
            
           
        }
        questionAValider = false;
        changeEtatBouton();
        
    }


    function questionSuivante(){
        let chrono = document.getElementById('chronometre');
        let question = document.getElementById('question');
        let reponses = document.getElementById('reponses');
        let button = document.getElementById('button');
        if(indexQuestion>=19) {
            chrono.remove();
            question.remove();
            reponses.remove();
            button.remove();
            annonceScore();
        }else{
            indexQuestion++;
            questionReponse = choosenQuestionResponses[indexQuestion];
            afficherQuestion();
            resetChrono();
            startChrono ();
            questionAValider = true;
            let div = document.getElementById('annonce-rep');
            div.innerHTML = "";
            changeEtatBouton();
            restartButton();  
        }
          
    }

    function annonceScore() {
        let div = document.getElementById('annonce-score');
            div.style.width = '600px';
            div.style.height = '31.2em';
            div.style.backgroundColor = '#004445';

        let annonce = document.getElementById('annonce');
            annonce.style.backgroundColor = '#004445';
            annonce.style.color = '#f8b400';
            annonce.style.fontWeight = '700';
            annonce.style.marginTop = '3em';
            annonce.style.height = '3em';

        let phraseRejouer = document.getElementById('rejouer');
            phraseRejouer.style.backgroundColor = '#004445';
            phraseRejouer.style.color = '#f8b400';
            phraseRejouer.style.fontWeight = '700';
            phraseRejouer.style.height = '3em';

        let rejouerButton = document.createElement('button');
            rejouerButton.appendChild(document.createTextNode(" JE REJOUE"));
        let divButton = document.getElementById('button-rejouer');
            divButton.appendChild(rejouerButton);
            rejouerButton.style.backgroundColor = "#2c786c";
            rejouerButton.style.color = '#f8b400';
            

       
        if(score >=10) {
          
            annonce.innerHTML = `Bravo, ton score est de ${score} !`;
            phraseRejouer.innerHTML = 'Rejoue et tente de faire encore mieux !';
            
        }else if(score < 10){
           
            
            annonce.innerHTML = `Malheureusement, ton score est de ${score} !`;
            phraseRejouer.innerHTML = 'Tu peux rejouer et tenter de faire mieux !';
           
            
        }
        

    }


    









