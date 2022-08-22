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








// reviews javasript
const reviewsTexts=[
    {
        id: 0,
        name: "mr aaron",
        job: "web developer",
        img:
          "./shoe/IMG-20210901-WA0023.jpg",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
]
const img =document.querySelector('#img');
const name =document.getElementById('name')
const text =document.getElementById('text')
const previous=document.getElementById('previous')
const next=document.getElementById('next')
const random=document.querySelector('.random')

let number=0;

previous.addEventListener('click',()=>{
  number--;
  if(number<0){
number=reviewsTexts.length-1
}
change(number)
  console.log(number);
})
next.addEventListener('click',()=>{
  number++;
  if(number>reviewsTexts.length-1){
    number=0
    }
    change(number)
  console.log(number);
})

function change(number) {
  img.src=reviewsTexts[number].img;
  text.innerText=reviewsTexts[number].text;
  name.innerText=reviewsTexts[number].name;
 
}

random.addEventListener('click',()=>{
number=Math.floor(Math.random()*reviewsTexts.length);
change(number)
console.log(rand);
})

window.addEventListener('load',()=>{
  img.src=reviewsTexts[0].img;
  text.innerText=reviewsTexts[0].text;
  name.innerText=reviewsTexts[0].name;
})