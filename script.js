let inputslider=document.getElementById("inputslider");
let slidervalue=document.getElementById("slidervalue");
let passbox=document.getElementById("passbox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let Numbers=document.getElementById("Numbers");
let Symbols=document.getElementById("Symbols");
let genBtn=document.getElementById("genBtn");
let copyicon=document.getElementById("copyicon");
//showing input slider value
slidervalue.innerHTML=inputslider.value;//can use textContent instead of innerhtml
inputslider.addEventListener('input',()=>{
    slidervalue.innerHTML=inputslider.value;
})
genBtn.addEventListener("click",()=>{
    passbox.value=generatePassword();
})
let uchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lchar="abcdefghijklmnopqrstuvwxyz";
let num="1234567890";
let sym="~!@#$%^&*";
//function generate password
function generatePassword(){
    let genPassword=" ";
    let allchar=" ";
    allchar +=lowercase.checked ? lchar:"";
    allchar +=uppercase.checked ? uchar:"";
    allchar +=Numbers.checked ? num:"";
    allchar +=Symbols.checked ? sym:"";


    if(allchar== ""|| allchar.length==0)
    {
        return genPassword;
    }
    let i=1;
    while(i<=inputslider.value)
 {
    genPassword += allchar.charAt(Math.floor(Math.random()*allchar.length));
    i++;
 }
    return genPassword;
}
copyicon.addEventListener("click",()=>{
    if(passbox.value!=""||passbox.value.length>=1)
    {
    navigator.clipboard.writeText(passbox.value);
   setTimeout(()=>{
    copyicon.title="password copied";
    copyicon.innerHTML="check";
   },2000);
    }
});
