menubar.onclick = function myFunction(){
    let x = document.getElementById('menu');

    if (x.className === 'menu2') {
        x.className += ' menu2';
    }
    else {
        x.className = 'menu2';
    }
}