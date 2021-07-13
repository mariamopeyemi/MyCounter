const display= document.querySelector("#display-numb");
const lower= document.querySelector("#reduce");
const add= document.querySelector("#add");

let count= 0;
display.textContent= count;

 
lower.addEventListener("click",lowerCount);
function lowerCount(){

    if(count>=1){
        count=count-1;
        display.textContent=count
        console.log(count);
    }
    else{ 
        (count>=1)
        count===0;
    }

}
    
    add.addEventListener("click", addCount);
    function addCount(){
        if(count<=49){
            count=count+1;
            display.textContent=count
            console.log(count);
        }   
    }