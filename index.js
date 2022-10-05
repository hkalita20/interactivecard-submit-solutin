
//CARD HOLDER NAME

let txtid=document.getElementById("card-holder");
let out=document.getElementById("Carholdername");

function fun1(){
    txtid.value=txtid.value.replace(/[^{a-z}{A-Z}\s]/g,"");
    let data=txtid.value;
    data=data.toUpperCase();
    out.innerHTML=data;
}

txtid.addEventListener("keyup",fun1);





// CARD NUMBER

let num=document.getElementById("card-number");
let outnum=document.getElementById("Carholdernumber");

function fun2(){
    let data1=num.value;
    data1=data1.toUpperCase();
    outnum.innerHTML=data1;
}

num.addEventListener("keyup",fun2);





// EXPIRY DATE 
let year=document.getElementById("year");
let month1=document.getElementById("month");

let month_output=document.querySelectorAll("span")[0];

function month_func(){
    month1.value=month1.value.replace(/[^\d]/g,"");
    let month_input=month1.value;
    month_output.innerHTML=month_input;
}
month1.addEventListener("keyup",month_func);


let year_output=document.querySelectorAll("span")[1];

function year_func(){
    year.value=year.value.replace(/[^\d]/g,"");
    let year_input=year.value;
    year_output.innerHTML=year_input;
}
year.addEventListener("keyup",year_func);





//CVV
let cvin=document.getElementById("cvv");
let cvout=document.getElementById("cvc-num");

function cvv_func(){
    cvin.value=cvin.value.replace(/[^\d]/g,"");
    let cv_in=cvin.value;
    cvout.innerHTML=cv_in;
}

cvin.addEventListener("keyup",cvv_func);







function clearErrors(){
        error=document.getElementsByClassName('formerror');
        for(let item of error){
            item.innerHTML="";
        }
    }




    function seterror(id,error){
               //sets error inside tag or id
               element=document.getElementById(id);
               element.getElementsByClassName('formerror')[0].classList.remove("hidden");                 
               element.getElementsByClassName('formerror')[0].innerHTML= error;
            }
            //INPUTS


            
            let submit=document.getElementById("btn");
            
            
            function validateForm(){    
                let name1=document.getElementById("card-holder").value;
                let number=document.getElementById("card-number").value;
                let expmonth=document.getElementById("month").value;
                let expyear=document.getElementById("year").value;
                let ccc=document.getElementById("cvv").value

                returnval = true;
                
                clearErrors();
                if(name1.length==0){
                    seterror("name","*Name cannot be empty");
                    document.getElementById("card-holder").classList.remove("mr");
                    document.getElementById("card-holder").style.borderColor="red";     
                    returnval=false;
                }
                else{
                    document.getElementById("card-holder").style.borderColor="black";     
                }
                
                if(number.length==0){
                    seterror("number","*Card number cannot be blank");
                    document.getElementById("card-number").classList.remove("mr");
                    document.getElementById("card-number").style.borderColor="red";     
                    returnval=false;
                    }

                else  if(number.length<19){
                    seterror("number","*Enter the complete card number");
                    document.getElementById("card-number").classList.remove("mr");
                    document.getElementById("card-number").style.borderColor="red";          
                    returnval=false;
                    }
                    else{
                        document.getElementById("card-number").style.borderColor="black"; 
                    }

                if(expmonth.length==0){
                        seterror("exp-main","*can't be blank");
                        document.getElementById("month").classList.remove("mr");     
                        document.getElementById("year").classList.remove("mr");   
                        document.getElementById("month").style.borderColor="red";    
                        returnval=false;
                    }

                else if(expmonth.length!=2){
                        seterror("exp-main","**Enter valid month");
                        document.getElementById("month").classList.remove("mr");     
                        document.getElementById("year").classList.remove("mr");
                        document.getElementById("month").style.borderColor="red";          
                        returnval=false;
                    }
                    
                    else if(expmonth>12){
                        seterror("exp-main","*Enter valid month");
                        document.getElementById("month").classList.remove("mr");     
                        document.getElementById("year").classList.remove("mr");
                        document.getElementById("month").style.borderColor="red";          
                        returnval=false;
                    }

                    else{
                        document.getElementById("month").style.borderColor="black";      
                    }
                    
                    
                    
                    if(expyear.length==0){
                            seterror("exp-main","*can't be blank");
                            document.getElementById("month").classList.remove("mr");     
                            document.getElementById("year").classList.remove("mr");
                            document.getElementById("year").style.borderColor="red";          
                            returnval=false;
                        }
    
                    else if(expyear.length!=2){
                            seterror("exp-main","**Enter valid year");
                            document.getElementById("month").classList.remove("mr");     
                            document.getElementById("year").classList.remove("mr");
                            document.getElementById("year").style.borderColor="red";          
                            returnval=false;
                        }
                        else{
                            document.getElementById("year").style.borderColor="black";    
                        }

                        if(ccc.length==0){
                            seterror("cvv-main","*can't be blank");
                            document.getElementById("cvv").classList.remove("mr");   
                            document.getElementById("cvv").style.borderColor="red";     
                        }
                        else if(ccc.length!=3){
                            seterror("cvv-main","*Enter the 3 digit");
                            document.getElementById("cvv").classList.remove("mr");
                            document.getElementById("cvv").style.borderColor="red";     
                        }

                        else{
                            document.getElementById("cvv").style.borderColor="black"; 
                        }
                

    if(returnval==true){
        
    document.getElementById("myForm").classList.add("hidden");
    document.getElementById("thank-you").classList.remove("hidden");
      returnval=false;
    }
    
    return returnval;
    
    }

     