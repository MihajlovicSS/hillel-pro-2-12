'use strict'
const list = document.querySelector('#todoList')
const input = document.querySelector('#msgInput')
const button = document.querySelector('#msgButton')

addToListOnClick ()

function addToListOnClick (){
    list.textContent = 'TODO List'
    list.className = 'list-title'
    button.addEventListener('click', onButtonClick)
}
function onButtonClick (){
    if (validation(input.value)){
        const li = document.createElement('li')
        li.className = 'list-item'
        li.textContent = input.value
        list.append(li)
    }
    input.value = ''
}
function validation (value){
    if (value.trim() === '') {
        alert('The field must be not empty!')
        return false
    }
    else return true
}