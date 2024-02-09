const passwordBox=document.getElementById("password")
const lenght=12;
const UpperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const LowerCase="abcdefghijklmnopqrstuvwxyz"
const number="0123456789"
const symbol="!@#%^&*()_+=-><|{}[]~"
const allChars=UpperCase+LowerCase+number+symbol
function creatPassword(){
    let password="";
    password+= UpperCase[Math.floor(Math.random()* UpperCase.length)];
    password+= LowerCase[Math.floor(Math.random()* LowerCase.length)];
    password+= symbol[Math.floor(Math.random()* symbol.length)];
    password+= number[Math.floor(Math.random()* number.length)];
    while(lenght>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value= password;
} 