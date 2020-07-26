const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const W = canvas.width ;
const Y = canvas.height;


let maxParticules = 1000;
let particules = [];
for(let i = 0; i < maxParticules; i++){
    particules.push({
        x: Math.random() * W,
        y: Math.random() * Y,
        r: Math.random() * 18 + 1,
        d: Math.random() * maxParticules,
        color: "rgba(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", 0.8)",
        tilt: Math.floor(Math.random() * 5) - 5
    });
}

function drawFlakes(){
    ctx.clearRect(0,0, W, Y);
    draw();

    for(let i = 0; i < maxParticules; i++) {
        let particule = particules[i];
        ctx.beginPath();
        ctx.lineWidth = particule.r;
        ctx.strokeStyle = particule.color;
        ctx.moveTo(particule.x, particule.y);
        ctx.lineTo(particule.x + particule.tilt + particule.r / 2, particule.y + particule.tilt);
        ctx.stroke();
    }
    update();
}

let angle = 0;
function update() {
    angle += 0.01;
    for(let i = 0; i < maxParticules; i++) {
        let particule = particules[i];
        particule.y += Math.cos(angle + particule.d) + 1 + particule.r / 2;
        particule.x += Math.sin(angle) * 2;
        if(particule.x > W + 5 || particule.x < -5 || particule.y > Y) {
            if(i % 3 > 0) 
            {
                particules[i] = {
                    x: Math.random() * W,
                    y: -10,
                    r: particule.r,
                    d: particule.d,
                    color: particule.color,
                    tilt: particule.tilt

                };
            }
        }
    }
}




function draw() {

    ctx.clearRect(0, 0, W, Y);
    
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

   

    // Afficher image 1
    const medaille1 = new Image();
    medaille1.onload = function () {
        ctx.drawImage(medaille1, medaille1X, medaille1Y, 25, 25);
    }
    medaille1.src = '../images/award-297024_640.png'; // Telechargement (1s)
    

    
     // Afficher image 2
     const medaille2 = new Image();
     medaille2.onload = function () {
         ctx.drawImage(medaille2, medaille2X, medaille2Y, 25, 25);
     }
     medaille2.src = '../images/award-297024_640.png'; // Telechargement (1s)
     

     // Afficher image 3
     const coupe = new Image();
     coupe.onload = function () {
         ctx.drawImage(coupe, coupeX, coupeY, 60, 60);
     }
     coupe.src = '../images/achievement-1293132_640.png'; // Telechargement (1s)
 

     // Afficher image 4
     const ampoule = new Image();
     ampoule.onload = function () {
         ctx.drawImage(ampoule, ampouleX, ampouleY, 70, 70);
     }
     ampoule.src = '../images/light-bulb-1926533_640.png'; // Telechargement (1s)
    

    // Afficher score

    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText('Score:'+ score, 20, 40);

    }
     
draw();


















