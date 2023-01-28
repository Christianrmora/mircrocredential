console.log('Christian Mora')
let item1 = document.querySelector('.link1')
let modal = document.querySelector('.modalWindow')
let xclose = document.querySelector('.modalHeadX')
item1.addEventListener('click', function(){
    modal.style.display = 'block'
})

xclose.addEventListener('click', function(){
    modal.style.display = 'none'
})