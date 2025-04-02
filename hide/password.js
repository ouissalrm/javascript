let icon=document.querySelector('i')
let input=document.querySelector('input')
function changer(){
if(input.getAttribute('type')==='password'){
input.setAttribute('type','text')
icon.setAttribute('class','fa-regular fa-eye-slash')
}
else{
input.setAttribute('type','password')
}
}