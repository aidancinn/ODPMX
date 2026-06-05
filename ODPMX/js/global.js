const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-menu');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});
reveals.forEach(el=>observer.observe(el));
