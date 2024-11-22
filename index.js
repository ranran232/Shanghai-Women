const hide1= document.getElementById('hide1');
const hide2= document.getElementById('hide2');
const hide3= document.getElementById('hide3');

const show= ()=>{
    hide1.addEventListener('click', ()=>{
        const pricelist1=document.getElementById('pricelist1');
        pricelist1.classList.toggle('show');
    })
    hide2.addEventListener('click', ()=>{
        const pricelist2=document.getElementById('pricelist2');
        pricelist2.classList.toggle('show');
    })
    hide3.addEventListener('click', ()=>{
        const pricelist3=document.getElementById('pricelist3');
        pricelist3.classList.toggle('show');
    })
}

show();

const navBtn= document.getElementById('nav-effect-btn');

navBtn.addEventListener('click', ()=>{
    const navEffect= document.getElementById('nav-effect');
    const list=document.getElementById('list');
    const h1=document.getElementById('h1');
    list.classList.toggle('show')
    h1.classList.toggle('show');
    navEffect.classList.toggle('show');
})






// window.onscroll= function(){
//     hideFunction();
// }

// function hideFunction(){
//     if(document.documentElement.scrollTop > 50){
//         const botNav=document.getElementById('mobile-bot-nav');
//         botNav.classList.add('hide');
//     }
//     else{
//         const botNav=document.getElementById('mobile-bot-nav');
//         botNav.classList.remove('hide');
//     }
// }

window.addEventListener('scroll', function(event){
    const botNav=document.getElementById('mobile-bot-nav');

    if(this.window.scrollY > 300){
        botNav.classList.add('hide');
    }
    else{
        botNav.classList.remove('hide');
    }
})



