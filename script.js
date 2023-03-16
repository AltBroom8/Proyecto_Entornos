function comprueba1(vector1,cajon1,m,n){
    console.log("ha entrado en la funcion");
    let miflag=false;
    for(let i=m;i<n;i++){
        console.log("for entra");
        if(vector1[i].classList.contains("tachado")){
            miflag=true;
        }
        else{
            miflag=false;
            break;
        }
    }
    if(miflag){
        console.log("se deberia imprimir el tachón")
        let tachado1= document.createElement("div");
        cajon1.appendChild(tachado1);
        tachado1.classList.add("linea");
        if(m==0){
            tachado1.classList.add("t1");
        }
        else if(m==5){
            tachado1.classList.add("t2");
        }
        else if(m=10){
            tachado1.classList.add("t3");
        }
        tachado1.addEventListener("animationend",()=>{
            cajon1.removeChild(tachado1);
        });
        return true;
    }
    return false;

};

    let carton1=[];
    let carton2=[];
    let cajon1= document.querySelector(".cajon1");
    let cajon2= document.querySelector(".cajon2");
    let vector1=Array.from(document.querySelectorAll(".cajita"));
    let vector2=Array.from(document.querySelectorAll(".cajita2"));
    var num=0;
    let bandera_boton=false;
    for (let i=0;i<15;i++){
        num=0;
        let flag=false;
        do{
            flag=false;
            num=(Math.floor(Math.random()*89)+1);
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
            num=(Math.floor(Math.random()*89)+1);
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




    let cambia_carton1=document.createElement("button");
    let cambia_carton2=document.createElement("button");
    let body =document.querySelector("body");
    body.appendChild(cambia_carton1);
    body.appendChild(cambia_carton2);
    cambia_carton1.classList.add("cambia","cambia1");
    cambia_carton2.classList.add("cambia","cambia2");
    cambia_carton1.innerText="CAMBIA!!"
    cambia_carton2.innerText="CAMBIA!!"
    cambia_carton1.addEventListener("click",(e)=>{
        for (let i=0;i<15;i++){
            vector1.pop();
            carton1.pop();
        }
        for (let i=0;i<15;i++){
            num=0;
            let flag=false;
            do{
                flag=false;
                num=(Math.floor(Math.random()*89)+1);
                for(let j = 0; j < carton1.length; j++){
                    if (num==carton1[j]){
                        flag=true;
                    }
                }
            }while(flag==true);
            carton1.push(num);
        }
        vector1=Array.from(document.querySelectorAll(".cajita"));
        for (let i=0;i<15;i++){
            vector1[i].innerText = carton1[i];
        }
    });
    cambia_carton2.addEventListener("click",(e)=>{
        for (let i=0;i<15;i++){
            vector2.pop();
            carton2.pop();
        }
        for (let i=0;i<15;i++){
            num=0;
            let flag=false;
            do{
                flag=false;
                num=(Math.floor(Math.random()*89)+1);
                for(let j = 0; j < carton1.length; j++){
                    if (num==carton2[j]){
                        flag=true;
                    }
                }
            }while(flag==true);
            carton2.push(num);
        }
        vector2=Array.from(document.querySelectorAll(".cajita2"));
        for (let i=0;i<15;i++){
            vector2[i].innerText = carton2[i];
        }
    });

let contador=-1;
let muchosNumeros = [];
let muchosNumeros2 = [];
for (let i=0;i<89;i++){
    let flag=false;
    num=0;
    do{
        flag=false;
        num=(Math.floor(Math.random()*89)+1);
        for(let j=0;j<muchosNumeros.length;j++){
            if (num==muchosNumeros[j]){
                flag=true;
            }
        }
    }while(flag==true);
    
    muchosNumeros.push(num);
    
}

let comprobaciones1=[false,false,false];
let comprobaciones2=[false,false,false];

let miboton= document.querySelector("#miboton");
miboton.addEventListener("click",(e)=>{
    bandera_boton=true;
    if (bandera_boton) {
        cambia_carton1.classList.add("cambia_desaparece");
        cambia_carton2.classList.add("cambia_desaparece");
        cambia_carton1.addEventListener("transitionend", function() {
            body.removeChild(cambia_carton1);
        });
        cambia_carton1.addEventListener("transitionend", function() {
            body.removeChild(cambia_carton2);
        });
    }
    
    
    contador++;
    
    if(contador<89){
        let nuevo = document.createElement("div");
        let recuadro=document.querySelector("#recuadro");
        recuadro.appendChild(nuevo);
        nuevo.innerText=muchosNumeros[contador];
        nuevo.classList.add("cajita3");
        for (let i=0;i<15;i++){
            vector1[i].addEventListener("click",(e)=>{
                if( e.target.innerText==nuevo.innerText){
                    e.target.classList.replace("cajita","tachado");
                }
                if(comprobaciones1[0]==false){
                    comprobaciones1[0]=comprueba1(vector1,cajon1,0,5);
                    console.log(comprobaciones1[0]);
                }
                if(comprobaciones1[1]==false){
                    comprobaciones1[1]=comprueba1(vector1,cajon1,5,10);
                    console.log(comprobaciones1[0]);
                }
                if(comprobaciones1[2]==false){
                    comprobaciones1[2]=comprueba1(vector1,cajon1,10,15);
                    console.log(comprobaciones1[0]);
                }
            })
        }
        for (let i=0;i<15;i++){
            vector2[i].addEventListener("click",(e)=>{
                if( e.target.innerText==nuevo.innerText){
                    e.target.classList.replace("cajita2","tachado");
                }
                if(comprobaciones2[0]==false){
                    comprobaciones2[0]=comprueba1(vector2,cajon2,0,5);
                    
                }
                if(comprobaciones2[1]==false){
                    comprobaciones2[1]=comprueba1(vector2,cajon2,5,10);
                }
                if(comprobaciones2[2]==false){
                    comprobaciones2[2]=comprueba1(vector2,cajon2,10,15);
                }

            })
        }
    }
    
});








