

const box = document.createElement('button');
box.classList.add('box');


const board = document.querySelector('#board');


let nb = 1;


for(let i = 1; i <= 4; i++){
    
    const newbox = box.cloneNode();
    newbox.innerText = i;
    
    board.appendChild(newbox);

    let active = false;

    newbox.addEventListener('click', function() {

        active = !active;

        if(active){
        newbox.style.transform = "scale(0.9) rotate(360deg)";
        newbox.style.transition = "all 2s";
        newbox.style.background = "crimson";
        } else {
            newbox.style.transform = "scale(1) rotate(0)";
            newbox.style.transition = "all 2s";
            newbox.style.background = "darkcyan";
        }
    });
}




