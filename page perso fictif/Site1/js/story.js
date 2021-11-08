const cursor = document.querySelector('.cursor');

var links = document.getElementsByTagName('a');document.querySelector('.btn-menu,btn-circle')

const btnCircle = document.querySelector('.btn-circle');

const circleMenu = document.querySelector('.circle-menu');

var front = document.querySelector('.front');

const playbutton = document.querySelector('.play_pause_button');
 
const img = document.querySelectorAll('img');

var i = 0;

 function play_single_sound() {
     if (i==0) {
    document.getElementById('audiotag1').play();
    i = i + 1 ;
    front.classList.toggle('music');
    cursor.classList.toggle('music1');
}
    else {
        document.getElementById('audiotag1').pause();
        i = 0 ;
        front.classList.toggle('music');
        cursor.classList.toggle('music1');
    
    }
}

function pop(){
    document.getElementById('pop').play();
}

function pop1() {
   
   document.getElementById('pop1').play();
}

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:'+(e.pageY - 20)+"px; left:"+(e.pageX - 20)+"px;")
})
                                                                                                        //expliquer dans cv.js
document.addEventListener('click', ()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500);
})


   for (const link of links) {
link.addEventListener('mouseenter', e => {
   cursor.classList.remove('default');
   cursor.classList.add('focus');
                                                                        //expliquer dans cv.js
   
})}
    for (const link of links) {
link.addEventListener('mouseleave', e => {
    cursor.classList.remove('focus');
    cursor.classList.add('default');
 
    
 })}

                                                                            //expliquer dna scv.js
btnCircle.addEventListener('click', () => {

    btnCircle.classList.toggle('menu-anim');
    circleMenu.classList.toggle('circle-anim');
    pop1()
    

})


for (const link of img) {
    link.addEventListener('mouseenter', e => {
       pop()                  //expliquer dans cv.js
    
       
    })}