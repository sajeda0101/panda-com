// prac-02
const heading=document.querySelectorAll('h2');
for(const head of heading){
    head.style.color='lightblue'
}


// prac-03
const bagsection=document.querySelectorAll('#Bagpack');
// bagsection.style.backgroundColor='tomato'

for(const bag of bagsection){
    bag.style.backgroundColor='tomato'
}

// prac-04

const cardChange=document.getElementsByClassName('card');
for(const card of cardChange){
    card.style.borderRadius='30px'
}

// prac-05

//  function makeAlice(){

// console.log('clicked buy now button')

// }

// prac-06

// const buttonClick=document.getElementsByClassName('btn')
// for(const buttons of buttonClick){

// }

// -08

document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
const text=event.target.value;
const submitButton=document.getElementById('btn-submit');
if(text==='email'){
    submitButton.removeAttribute('disabled')
}
else{
    submitButton.setAttribute('disabled',true)
}

})
// /prac-9

document.getElementById('first').onmouseenter=mouseEnter;
function mouseEnter(){
    
}
