   
    const urlParams = new URLSearchParams(window.location.search);
    const idTheme = urlParams.get('idTheme');
    let questionReponse;
    let indexQuestion = 0;
    let choosenQuestionResponses;
    let questionAValider;
    let score = 0;
    let ampouleX = 0;
    let ampouleY = 410;
    let medaille1X = 185;
    let medaille1Y = 280;
    let medaille2X = 335;
    let medaille2Y = 130;
    let coupeX = 525;
    let coupeY = 20;

    if (idTheme) {
        choosenQuestionResponses = findAllQuestionResponses(idTheme);
        questionReponse = choosenQuestionResponses[indexQuestion];
        afficherQuestion();
        questionAValider = true;
        changeEtatBouton();
        startChrono();
    }

    function findAllQuestionResponses(id){
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
        let numeroQuestion = questionReponse.index;
        let question = questionReponse.question;
        let questionEl = document.getElementById('question'); // DIV qui contient la question à mon QUIZZ
        let reponsesEl = document.getElementById('rep-possibles'); // DIV qui contient les réponses à mon QUIZZ
        
       
        questionEl.innerHTML = "";
        reponsesEl.innerHTML = "";

        let reponsesPossibles = questionReponse.reponsesPossibles;

        questionEl.innerHTML = question +" "+ numeroQuestion +":"+" "+" "+" "+ questionReponse.poserQuestion;
        questionEl.style.color = '#004445';


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


    function changeEtatBouton() {
        const buttonValider = document.getElementById('button');
        if (questionAValider) {
            buttonValider.innerHTML = "Je valide";
            buttonValider.removeEventListener("click", questionSuivante);
            buttonValider.addEventListener("click", verifieReponse);
            
            
        } else {
            if(indexQuestion < 9) {
                buttonValider.innerHTML = "Question suivante";
                buttonValider.removeEventListener("click", verifieReponse);
                buttonValider.addEventListener("click",questionSuivante);
            }else {
                buttonValider.innerHTML = "Resultats";
                buttonValider.style.backgroundColor = "#f8b400";
                buttonValider.style.color = "#004445";
                buttonValider.removeEventListener("click", verifieReponse);
                buttonValider.addEventListener("click",annonceScore);
            }

        } 
    }

    function verifieReponse() {
        let bonneReponse = questionReponse.indexOfReponse;
        let reponsesProposees = questionReponse.reponsesPossibles;
        let chechedButton = document.querySelector('input[name="reponse"]:checked');
        
        if(chechedButton == null) {
            let div = document.getElementById('annonce-rep');
            div.innerHTML = 'Veuillez sélectionner une réponse avant de valider !';
            div.style.color = '#004445';
            div.style.fontWeight = 700;
            div.style.textAlign = 'center';
        }
       
        else {
            stopChrono();
            let indexReponseChoisie = document.querySelector('input[name="reponse"]:checked').value;
            if(bonneReponse == indexReponseChoisie) {
                let div = document.getElementById('annonce-rep');
                div.innerHTML = 'Bonne réponse !';
                div.style.color = 'green';
                div.style.fontWeight = 700;
                div.style.textAlign = 'center';
                score++;
                jumpSound();
                if(score === 3|| score === 6) {
                    if(score === 3) {
                        medaille1X = 15;
                        medaille1Y = 50;
                    }    
                    if(score === 6) {
                        medaille2X = 15;
                        medaille2Y = 100;
                    }
                    setTimeout(() => {
                        playSoundMedaille();
                    }, 100);
    
                }
                if(score === 10){
                    coupeX = 15;
                    coupeY = 150;
                    setTimeout(() => {
                        playSoundCoupe();
                    }, 100);
                }

            
                jumpLight();
                draw();
    
        
            } else {
                let div = document.getElementById('annonce-rep');
                div.innerHTML = 'La bonne réponse est :' + " " + reponsesProposees[bonneReponse];
                div.style.color = 'red';
                div.style.fontWeight = 700;
                div.style.textAlign = 'center';
                noJump();
            }
            questionAValider = false;
        changeEtatBouton();
        } 
        
    }



    function jumpLight() {
        let y = -50;
        let x = 50;
        
        if(score > 8 && score <= 10) {
            ampouleX = ampouleX + 50;
            ampouleY = ampouleY + 0;
        }else{
            ampouleY = ampouleY + y;
            ampouleX = ampouleX + x;
        }
        
    }

    function playSoundMedaille() {
        let audio = new Audio('../SOUND/274177__littlerobotsoundfactory__jingle-win-synth-03.wav');
        audio.play();
    }


    function playSoundCoupe() {
        let audio = new Audio('../SOUND/456968__funwithsound__success-resolution-video-game-fanfare-sound-effect.mp3');
        audio.play();
    }

    function jumpSound() {
        let audio = new Audio('../SOUND/445157__tissman__jump.wav');
        audio.play();
    }

    function noJump() {
        let audio = new Audio('../SOUND/517765__danlucaz__game-fx-8.wav');
        audio.play();
    }


    function questionSuivante(){
        let chrono = document.getElementById('chronometre');
        let question = document.getElementById('question');
        let reponses = document.getElementById('reponses');
        let button = document.getElementById('button');
        if(indexQuestion>= 9) {
            chrono.remove();
            question.remove();
            reponses.remove();
            button.remove();
            
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
        let chrono = document.getElementById('chronometre');
        let question = document.getElementById('question');
        let reponses = document.getElementById('reponses');
        let button = document.getElementById('button');

        chrono.remove();
        question.remove();
        reponses.remove();
        button.remove();
        
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
            rejouerButton.addEventListener("click", () => {
                window.location.href = "../HTML/menu.html";
            });

            if(score === 10) {
                annonce.innerHTML = `Tu as obtenu ${score} ! C'est le meilleur score !`;
                phraseRejouer.innerHTML = 'Tu peux rejouer et tenter de réitérer ton exploit!';
                let imageGood = document.createElement('img');
                imageGood.setAttribute("src", "../images/light-bulb-1926533_640.png");
                let divImage = document.getElementById('div-image');
                divImage.appendChild(imageGood);
                imageGood.style.width = '250px';
                imageGood.style.height = '250px';
                imageGood.style.marginTop = '2em';
                imageGood.style.marginRight = '0.5em';
            
            }else if(score >=5) {
                annonce.innerHTML = `Bravo, ton score est de ${score} !`;
                phraseRejouer.innerHTML = 'Rejoue et tente de faire encore mieux !';
                let imageGood = document.createElement('img');
                imageGood.setAttribute("src", "../images/light-bulb-1926533_640.png");
                let divImage = document.getElementById('div-image');
                divImage.appendChild(imageGood);
                imageGood.style.width = '250px';
                imageGood.style.height = '250px';
                imageGood.style.marginTop = '2em';
                imageGood.style.marginRight = '0.5em';
        
            
            }else if(score < 5){
                annonce.innerHTML = `Malheureusement, ton score est de ${score} !`;
                phraseRejouer.innerHTML = 'Tu peux rejouer et tenter de faire mieux !';
                let imageBad = document.createElement('img');
                imageBad.setAttribute("src", "../images/bulb-2029707_640.png");
                let divImage = document.getElementById('div-image');
                divImage.appendChild(imageBad);
                imageBad.style.width = '250px';
                imageBad.style.height = '250px';
                imageBad.style.marginTop = '2em';
                imageBad.style.marginRight = '0.5em';
        }
    }


          
            
                
        
       
        
       
        









