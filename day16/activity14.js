console.log('Christian Mora')
let menu1 = document.querySelector('.menu')
let openMenu1 = document.querySelector(".openMenu")
openMenu1.addEventListener('click', function(){
    this.classList.toggle('active')
    menu1.classList.toggle('openClose')
})

// SECCION STORAGE IN FORMS
function passValues(){
    let username = document.querySelector('#user').value
    sessionStorage.setItem('userN', username)
    return false
}
let input1 = document.querySelector('.submit1')
input1.addEventListener('click',passValues)