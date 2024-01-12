'use strict';

const skip = document.querySelector('#skip');
skip.addEventListener('click', ()=>{
    document.querySelector('header').classList.add('erase');
});

const sakura = document.querySelector('#sakura');
const sports = document.querySelector('#sports');
const potato = document.querySelector('#potato');
const girl = document.querySelector('#girl');
const black = document.querySelector('#black');
const comment1 = document.querySelector('#comment1');
const comment2 = document.querySelector('#comment2');
const comment3 = document.querySelector('#comment3');
const comment4 = document.querySelector('#comment4');
const comments = document.querySelectorAll('.comments');
const close = document.querySelectorAll('.close');


sakura.addEventListener('click', ()=>{
    black.classList.remove('hidden');
    comment1.classList.remove('hidden');
});
sports.addEventListener('click', ()=>{
    black.classList.remove('hidden');
    comment2.classList.remove('hidden');
});
potato.addEventListener('click', ()=>{
    black.classList.remove('hidden');
    comment3.classList.remove('hidden');
});
girl.addEventListener('click', ()=>{
    black.classList.remove('hidden');
    comment4.classList.remove('hidden');
});
black.addEventListener('click', ()=>{
    black.classList.add('hidden');
    comments.forEach(comment =>{
        comment.classList.add('hidden');
    });
});
close.forEach(cl =>{
    cl.addEventListener('click', ()=>{
        black.classList.add('hidden');
        comments.forEach(comment =>{
            comment.classList.add('hidden');
        });
    });
});
