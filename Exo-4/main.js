

const box = document.createElement('button');
box.classList.add('box');


const board = document.querySelector('#board');

board.appendChild(box);

box.innerText = ("TEXT")


box.addEventListener('click', function() {
    alert("Class : box\n - width: 200px\n - height: 200px\n - background-color: darkcyan\n - font-size: 3em\n - font-weight: 600\n - color: ghostwhite")
})


