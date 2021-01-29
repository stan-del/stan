var ul = document.querySelector('ul.theme');
 let li =ul.querySelectorAll('li')
//Get Dom
let active = document.querySelectorAll('.active');
let body = document.querySelector('body');
let head = document.querySelector('div#head');

let split = document.querySelector('section#split');
let about = document.querySelector('section#about');
let two  = document.querySelectorAll('#two');




  
 
//loop through
 
li.forEach(list=>{
  
  let a =  list.getElementsByTagName('a')[0];
//add click event for looped  list




  a.addEventListener('click', eish=>{
     

   
  

body.className= `${a.id} + darken-2 `
head.className = `${a.id} + nav-wrapper `

split.className = `${a.id}   container darken-3 `
about.className = `${a.id} + darken-3 `

two.forEach(twee=>{
  twee.className = `${a.id} + lighten-1 `
})
active.forEach(act=>{
act.className = `white-text ` 
})
  })




});














  
  










   





