let text=document.querySelector('.word');
let chars=document.querySelector('.chars');
let words=document.querySelector('.words');

text.addEventListener("input",()=>{
    if(text.value.trim()===""){
        chars.textContent=0;
        words.textContent=0;
        return false;

    }
    chars.textContent=text.value.length;

    const wod=text.value.split(" ").length;
    words.textContent=wod;
})
