console.log('Loaded!');
var element=document.getElementById('main-element');
element.innerHTML='complete two weeks today';

//move image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginleft+=10;
    img.style.marginLeft=marginleft+'px';
}
img.onclick=function(){

var interval=setInterval(moveRight,100);
 
};