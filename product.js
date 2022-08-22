const hamburger=document.querySelector('.btn-toggle'); 
const links=document.querySelector('.links'); 
const linksLi=document.querySelector('.home');  
const social=document.querySelector('.social-icons');
const closeBtn=document.querySelector('.close-btn');
const contact=document.querySelector('.contact');


hamburger.addEventListener('click',()=>{

    links.classList.toggle('show-link')
   
    })

linksLi.addEventListener('click',(e)=>{
     
       links.classList.remove('show-link')
      
  
})

contact.addEventListener('click',(e)=>{

    links.classList.remove('show-link')
    social.classList.add('show-icons');
   closeBtn.addEventListener('click',()=>{
    social.classList.remove('show-icons');
   })
    e.preventDefault()
})
const date=document.getElementById('date');
date.innerText=new Date().getFullYear()








// product javasript
const allBtn=document.querySelector('.all');
const shoesBtn=document.querySelector('.shoes');
const trouserBtn=document.querySelector('.trousers');
const shirtBtn=document.querySelector('.shirts');
const otherBtn=document.querySelector('.other');
const items=document.querySelectorAll('.item');

allBtn.addEventListener('click',()=>{
items.forEach((item)=>{
    item.classList.remove('hide')
})
})
otherBtn.addEventListener('click',()=>{
items.forEach((item)=>{
    item.classList.remove('hide');
    if(!(item.classList.contains('other'))){
      item.classList.add('hide')
    }
})
})
shoesBtn.addEventListener('click',()=>{
items.forEach((item)=>{
    item.classList.remove('hide');
    if(!(item.classList.contains('shoe'))){
        item.classList.add('hide')
      }
})
})
trouserBtn.addEventListener('click',()=>{
items.forEach((item)=>{
    item.classList.remove('hide')
    if(!(item.classList.contains('trouser'))){
        item.classList.add('hide')
      }
})
})
shirtBtn.addEventListener('click',()=>{
items.forEach((item)=>{
    item.classList.remove('hide')
    if(!(item.classList.contains('shirt'))){
        item.classList.add('hide')
      }
})
})
