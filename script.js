document.addEventListener("DOMContentLoaded", function() {
    let carton1=[];
    let carton2=[];
    let vector1=Array.from(document.querySelectorAll(".cajita"));
    let vector2=Array.from(document.querySelectorAll(".cajita2"));
    for (let i=0;i<15;i++){
        var num=0;
        let flag=false
        do{
            num=(Math.floor(Math.random()*80)+10);
            for(let j=0;j<carton1.lenght;j++){
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

    //SEPARACION 
    for (let i=0;i<15;i++){
        var num=0;
        let flag=false
        do{
            flag=false;
            num=(Math.floor(Math.random()*80)+10);
            for(let j=0;j<carton2.lenght;j++){
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

});

