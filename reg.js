function check()
{
 var uid=document.getElementById("ui").value;
    var user= /^[a-zA-Z0-9]+$/;
    if(uid.match(user))
    {
    document.getElementById("demo").innerHTML="it is a valid"

var password=document.getElementById("pasword").value;
    var pass="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$";
    if(password.match(pass))
    {
        document.getElementById("pwrd").innerHTML="it is valid"

var name=document.getElementById("name").value;
      var uname= /^[a-zA-Z0-9]+$/;
      if(name.match(uname))
      {
        document.getElementById("nme").innerHTML="it is a valid"
var address=document.getElementById("addr").value;
      var addrs=/^[a-zA-Z0-9]+$/;
      if(address.match(addrs))
      {
        document.getElementById("addr1").innerHTML="it is a valid"

var email=document.getElementById("mail").value;
      var mailpattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
      if(email.match(mailpattern))
      {
         document.getElementById("maile").innerHTML="it is a valid"

if(document.getElementById("male").checked==true||document.getElementById("female").checked==true)
{


     document.getElementById("gendr").innerHTML="radio button is selected"
     if(document.getElementById("check1").checked==true||document.getElementById("check2").checked==true)
     {
         document.getElementById("Language").innerHTML="language is selected"
        
if(document.getElementById("selection").value!="")
{
    document.getElementById("district").innerHTML="you are selected district"
    alert("Registration Successfuly completed")
}
else{
    
    document.getElementById("district").innerHTML="you are not selected district"
}
     }
     else{
        document.getElementById("Language").innerHTML="language not is selected"

     }
}
else{
           document.getElementById("gendr").innerHTML="Radiobutton is not selected"
}
      
      }
else{
    document.getElementById("maile").innerHTML="You have entered an invalid email address!"
}
      }



else  {
        document.getElementById("addr1").innerHTML="Must have 8 Character"
      }
}
     
else{
    document.getElementById("nme").innerHTML="Must have 8 Character"
}
    
   }
    else
    {
    document.getElementById("pwrd").innerHTML="it is not a valid.max 13 characters only"
    }}
else
    {
          document.getElementById("demo").innerHTML="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
   }

}
