//counter wala

var button=document.getElementById('counter');

button.onclick=function(){
  //create a request
  
  var request= new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
   if(request.readyState===XMLHttpRequest.DONE){
       //take some action
       if(request.status===200){
           var counter=request.responseText;
           var span=document.getElementById('count');
           span.innerHTML=counter.toString();
       }
   }
   //not done yet
  }
  //make a request
  request.open.GET('GET',"http://mrimosthe1.imad.hasura-app.io/counter",true);
  request.send(null);
  
};