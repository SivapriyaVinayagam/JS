function btn(){
    var un =document.getElementById("Name").value;
  
    var fn =document.getElementById("FName").value;
    var ad1 =document.getElementById("Address1").value;
    var city =document.getElementById("city").value;
    if(un.value.trim()=="")
    {
        
     var lab =document.getElementById("Man").style.visibility="visible";
     un.style.borderColor="red";
    }
    else
    document.getElementById("Man").style.visibility="hidden";
   
 
    if(fn.value.trim()=="")
    {

        document.getElementById("Man").style.visibility="visible";
        un.style.borderColor="red";   
    }
    else
    document.getElementById("Man").style.visibility="hidden";
    if(ad1.trim()=="")
    {
        document.getElementById("Man").style.visibility="visible";
        un.style.borderColor="red";  
    }
    else
    document.getElementById("Man").style.visibility="hidden";
   
   
    if(city.trim()=="")
    {
        document.getElementById("Man").style.visibility="visible";
        un.style.borderColor="red";  
    }
    else
    document.getElementById("Man").style.visibility="hidden";

    var pc = document.getElementById("Pin Code").value;
    regx=/^([0-9]{6})$/
    if(regx.test(pc.value))
    {
        document.getElementById("Man").style.visibility="visible";
        un.style.borderColor="red";
    }
    else
    document.getElementById("Man").style.visibility="hidden";
    

    var mobNo = document.getElementById("Phone Number").value;
    regx=/^([1-9][0-9]{9})$/
    if(regx.test(mobNo.value))
    {
        document.getElementById("Man").style.visibility="visible";
        un.style.borderColor="red";
    }
    else
    document.getElementById("Man").style.visibility="hidden";


    var email = document.getElementById("Email Id").value;
    regx=/^([a-zA-Z0-9.]+)@([a-z]{2,6})+).([a-z]{2,6}+).([a-z]{2,4})$/
    if(regx.test(email.value))
    {
        document.getElementById("Man").style.visibility="visible";
        un.style.borderColor="red";
    }
    else
    document.getElementById("Man").style.visibility="hidden";

    
    var DOB = document.getElementById("Date of Birth").value;
    regx=/^([0-9]{1,2}.+)([0-9]{1,2})+)([0-9]{2-4})/
    if(regx.test(DOB.value))
    {
        document.getElementById("Man").style.visibility="visible";
        un.style.borderColor="red";
    }
    else
    document.getElementById("Man").style.visibility="hidden";
   

   
}