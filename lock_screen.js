// Lock-screen for validating the pin(length=4) entered by user

const pin="1234";

const key_list=document.getElementsByClassName("keys");
const pass_validator=document.getElementById("pass_validator");
const pass=document.getElementById("pass");
const content1=document.getElementById("content1");
const content2=document.getElementById("content2");
const container=document.getElementById("container");





// By each clicking of keys the pass should show asterisk upto limit of 4
for(a of key_list){
    a.style.cursor="pointer";
    
}
let counter=1;

let input_pass="";


for(i=0;i<key_list.length;i++){

    key_list[i].addEventListener("click", function(event){

        if(counter>4){
            return;
        }
        else{
            
            console.log(event.target.textContent,"clicked");
            input_pass+=event.target.textContent;
        


            pass.textContent="*".repeat(counter);
            if(counter==4){
                if(input_pass==pin){
                    console.log("correct");
                    content1.style.display="none";
                    content2.style.display="initial";
                    content1.style.opacity="0";
                    content2.style.opacity="1";
                    container.style.background="url(./bg_cont.jpg)"


                }
                else{
                    console.log("incorrect");
                    pass_validator.style.opacity=1;
                }

            }
            
            counter++;

            

        }
        


       





    });

    
}







