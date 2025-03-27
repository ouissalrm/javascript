let  con=document.getElementById('con');
let ram=document.getElementById('ram')
let px=document.getElementById('px');
con.addEventListener("input",function convert(){
   if(con.value.trim()==""){
    ram.textContent=0;
    px.textContent=0;
    return false;

   }
   else{
    ram.textContent=con.value;
    px.textContent=con.value*16
   }

})