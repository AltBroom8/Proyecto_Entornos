let carton1=[];
let carton2=[];
let vector1=Array.from(document.querySelectorAll(".cajita"));
let vector2=Array.from(document.querySelectorAll(".cajita2"));
var num=0;
for (let i=0;i<15;i++){
    num=0;
    let flag=false;
    do{
        flag=false;
        num=(Math.floor(Math.random()*80)+10);
        for(let j = 0; j < carton1.length; j++){
            if (num==carton1[j]){
                flag=true;
            }
        }
    }while(flag==true);
    
    carton1.push(num);
}
for (let i=0;i<15;i++){
    vector1[i].innerText = carton1[i];
}

for (let i=0;i<15;i++){
    num=0;
    let flag=false;
    do{
        flag=false;
        num=(Math.floor(Math.random()*80)+10);
        for(let j=0;j<carton2.length;j++){
            if (num==carton2[j]){
                flag=true;
            }
        }
    }while(flag==true);
    
    carton2.push(num);
}
for (let i=0;i<15;i++){
    vector2[i].innerText = carton2[i];
}

let contador=-1;
let muchosNumeros = [];
let muchosNumeros2 = [];
for (let i=0;i<80;i++){
let flag=false;
num=0;
do{
    flag=false;
    num=(Math.floor(Math.random()*80)+10);
    for(let j=0;j<muchosNumeros.length;j++){
        if (num==muchosNumeros[j]){
            flag=true;
        }
    }
}while(flag==true);

muchosNumeros.push(num);

}
console.log(muchosNumeros);
let miboton= document.querySelector("#miboton");
miboton.addEventListener("click",(e)=>{
contador++;
if(contador<80){
    let nuevo = document.createElement("div");
    let recuadro=document.querySelector("#recuadro");
    recuadro.appendChild(nuevo);
    nuevo.innerText=muchosNumeros[contador];
    nuevo.classList.add("cajita3");
}


});



