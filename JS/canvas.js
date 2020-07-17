


function draw() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f8b400'; // jaune
    ctx.fillRect(125, 430, 50, 50);
    ctx.fillRect(225, 430, 50, 50);
    ctx.fillRect(325, 430, 50, 50);
    ctx.fillRect(425, 430, 50, 50);
    ctx.fillRect(525, 430, 50, 50);

    ctx.fillStyle = '#004445'; // bleu
    ctx.fillRect(75, 430, 50, 50);
    ctx.fillRect(175, 430, 50, 50);
    ctx.fillRect(275, 430, 50, 50);
    ctx.fillRect(375, 430, 50, 50);
    ctx.fillRect(475, 430, 50, 50);

    // 2eme ligne

    ctx.fillStyle = '#004445'; // bleu
    ctx.fillRect(125, 380, 50, 50);
    ctx.fillRect(225, 380, 50, 50);
    ctx.fillRect(325, 380, 50, 50);
    ctx.fillRect(425, 380, 50, 50);
    ctx.fillRect(525, 380, 50, 50);

    ctx.fillStyle = '#f8b400'; // jaune
    ctx.fillRect(175, 380, 50, 50);
    ctx.fillRect(275, 380, 50, 50);
    ctx.fillRect(375, 380, 50, 50);
    ctx.fillRect(475, 380, 50, 50);
    
    // 3eme ligne

    ctx.fillStyle = '#004445'; // bleu
    ctx.fillRect(175, 330, 50, 50);
    ctx.fillRect(275, 330, 50, 50);
    ctx.fillRect(375, 330, 50, 50);
    ctx.fillRect(475, 330, 50, 50);

    ctx.fillStyle = '#f8b400'; // jaune
    ctx.fillRect(225, 330, 50, 50);
    ctx.fillRect(325, 330, 50, 50);
    ctx.fillRect(425, 330, 50, 50);
    ctx.fillRect(525, 330, 50, 50);

    //4eme ligne

    ctx.fillStyle = '#004445'; // bleu
    ctx.fillRect(225, 280, 50, 50);
    ctx.fillRect(325, 280, 50, 50);
    ctx.fillRect(425, 280, 50, 50);
    ctx.fillRect(525, 280, 50, 50);

    ctx.fillStyle = '#f8b400'; // jaune
    ctx.fillRect(275, 280, 50, 50);
    ctx.fillRect(375, 280, 50, 50);
    ctx.fillRect(475, 280, 50, 50);
    
    //5eme ligne

    ctx.fillStyle = '#004445'; // bleu
    ctx.fillRect(275, 230, 50, 50);
    ctx.fillRect(375, 230, 50, 50);
    ctx.fillRect(475, 230, 50, 50);

    ctx.fillStyle = '#f8b400'; // jaune
    ctx.fillRect(325, 230, 50, 50);
    ctx.fillRect(425, 230, 50, 50);
    ctx.fillRect(525, 230, 50, 50);

    //6eme ligne

    ctx.fillStyle = '#004445'; // bleu
    ctx.fillRect(325, 180, 50, 50);
    ctx.fillRect(425, 180, 50, 50);
    ctx.fillRect(525, 180, 50, 50);

    ctx.fillStyle = '#f8b400'; // jaune
    ctx.fillRect(375, 180, 50, 50);
    ctx.fillRect(475, 180, 50, 50);
    
    //7eme ligne

    ctx.fillStyle = '#004445'; // bleu
    ctx.fillRect(375, 130, 50, 50);
    ctx.fillRect(475, 130, 50, 50);
    
    ctx.fillStyle = '#f8b400'; // jaune
    ctx.fillRect(425, 130, 50, 50);
    ctx.fillRect(525, 130, 50, 50);
    
    //8eme ligne

    ctx.fillStyle = '#004445'; // bleu
    ctx.fillRect(425, 80, 50, 50);
    ctx.fillRect(525, 80, 50, 50);
    
    ctx.fillStyle = '#f8b400'; // jaune
    ctx.fillRect(475, 80, 50, 50);

    // Afficher score

    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText('Score :', 20, 40);


    
    
}

draw();

//let score = 0;

//function ajouterMarche(){ 
 //   score++;
//}

//function gagnerUneMedaille(){
    
//}

//function gagnerLaCoupe(){

//}

