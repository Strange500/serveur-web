const cursor = document.querySelector('.cursor'); //la const sert aà selectionner la div cursor

const btnCircle = document.querySelector('.btn-circle'); //btn-circle désigne la div avec les ligne

const circleMenu = document.querySelector('.circle-menu'); // .circle-menu désigne le menu

const img = document.querySelectorAll('img');

var i = 0;

var front = document.querySelector('.front');
 
const playbutton = document.querySelector('.play_pause_button');
 
var links = document.getElementsByTagName('a'); // on selectionne toute les balise <a>

var i = 0;

function pop(){
    document.getElementById('pop').play();
}
function pop1() {
   
   document.getElementById('pop1').play();
}


function play_single_sound() {
     if (i==0) {
    document.getElementById('audiotag1').play();
    i = i + 1 ;
    front.classList.toggle('music');
    cursor.classList.toggle('music1');
    pop1()
}
    else {
        document.getElementById('audiotag1').pause();
        i = 0 ;
        front.classList.toggle('music');
        cursor.classList.toggle('music1');
        pop1()
    
    }
}

            //dés que la souris va bouger la div cursor bougera en fonction de l'emplacement de la souris
document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")    //le calcul permet de parfaitement center la div cursor sur la souris
})

document.addEventListener('click', ()=>{        //dés que l'on cliquera la souris aura l'attribut expand en css c'est une animation
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");      //on dit que l'on doit retirer l'attribut expand au bout de 0.5s
    }, 500);
})



    
    
   for (const link of links) {      // on ajoute autant d'event qu'il y a de balise <a>
link.addEventListener('mouseenter', e => {
   cursor.classList.remove('default');      //quand la souris rencontre un lien on ajoute l'attribut focus et on retire l'atribut default cela donne une nouvelle animation à la souris
   cursor.classList.add('focus');

   
})}
    for (const link of links) {// on ajoute autant d'event qu'il y a de balise <a>
link.addEventListener('mouseleave', e => {
    cursor.classList.remove('focus');        //quand la souris sort d'un lien on ajoute l'attribut default  et on retire l'atribut focus cela donne une nouvelle animation à la souris
    cursor.classList.add('default');
 
    
 })}




btnCircle.addEventListener('click', () => {  //quand l'on clique sur btn-circle on ajoute ou enléve les classe menu-anim pour btncircle et circle anim pour circle menu

    btnCircle.classList.toggle('menu-anim');        //toggle à un fonctionnement logique premiére appuie =1 second =0 ainsi de suite
    circleMenu.classList.toggle('circle-anim');
    pop1()
    

})


for (const link of img) {
    link.addEventListener('mouseenter', e => {
       pop()                  //expliquer dans cv.js
    
       
    })}




    

    

