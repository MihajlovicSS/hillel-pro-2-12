'use strict'
const list = document.querySelector('#todoList')
const input = document.querySelector('#msgInput')
const button = document.querySelector('#msgButton')

addToListOnClick ()

function addToListOnClick (){
    button.addEventListener('click', onButtonClick)
}
function onButtonClick (){
    if (validation(input.value)){
        const li = document.createElement('li')
        li.textContent = input.value
        list.append(li)
    }
    input.value = ''
}
function validation (value){
    if (value.trim() === '') return false
    else return true
}