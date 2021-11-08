


var front = document.querySelector('.front');
 
const playbutton = document.querySelector('.play_pause_button');

const cursor = document.querySelector('.cursor');

var i = 0;

const containerMenu = document.querySelector('.container-menu');  //on sélectionne l'élément .container-menu dans la variable containermenu

const btnMenu = document.querySelector('.btn-menu');        //on-sélectionne l'élément .btn-menu

var links = document.getElementsByTagName('a');

const blobs = document.querySelectorAll('.blob');

const img = document.querySelector('img');

function play_single_sound() {
     if (i==0) {
    document.getElementById('audiotag1').play();
    i = i + 1 ;
    front.classList.toggle('music');
    cursor.classList.toggle('music1');
    pop()
   
}
    else {
        document.getElementById('audiotag1').pause();
        i = 0 ;
        front.classList.toggle('music');
        cursor.classList.toggle('music1');
        pop1()
        
    
    }
}

function pop(){
    document.getElementById('pop').play();
}
function pop1() {
   
   document.getElementById('pop1').play();
}
btnMenu.addEventListener('click', () => {       //quand l'on clique sur la div btnmenu sa rajoute à containermenu la class active

    containerMenu.classList.toggle('active')
    pop1()

})


document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")        //expliquer dans cv.js
})

document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500);
})


    
   for (const link of links) {
link.addEventListener('mouseenter', e => {
   cursor.classList.remove('default');
   cursor.classList.add('focus');                   //expliquer dans cv.js

   
})}
    for (const link of links) {
link.addEventListener('mouseleave', e => {
    cursor.classList.remove('focus');           //expliquer dans cv.js
    cursor.classList.add('default');
 
    
 })}


for (const link of blobs) {
    link.addEventListener('mouseenter', e => {
       pop()                  //expliquer dans cv.js
    
       
    })}

    
        img.addEventListener('mouseenter', e => {
           pop()                  //expliquer dans cv.js
        
           
        })
    
       












