function editMovie(){
     var name=document.getElementById("ftitle").value;
     var gross=document.getElementById("fgross").value;
var date=document.getElementById("fdate").value;
var genre=document.getElementById("fgenre").value;
     if(name.trim()==""){
         alert("Title cant be empty");
         return false;
         
     }
  if(gross.trim()==""){
         alert("Box Office cant be empty");
         return false;
         
     }
if(/^[A-Za-z]+$/.test(gross)){
         alert("Box Office can only have numbers");
         return false;
         
     }
if(date.trim()==""){
         alert("date cant be empty");
         return false;
         
     }

var reg = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
        if (!reg.test(date)) {
           alert("date cant be in this format");
        
        return false;
}
    	  


if(genre.trim()==""){
         alert("genre cant be empty");
         return false;
         
     }
     if(name.length!=0){
     
      if (/[0-9]/.test(name)) {
        alert('Title  should not contains a number');
     return false;
         }

    if(name.length<2){
        alert('Name length should be between 2-100 characters');
         return false;
         
    }
    
    if(name.length>100){
        alert('Name length should be between 2-100 characters');
         return false;
         
    }
         if(/\s/.test(name)){
        alert('Title cannot have space');
        return false;
      }
    }
}