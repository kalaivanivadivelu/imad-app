/* console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text'
);
element.innerHTML='new value';

//move the image
var img=document.getElementById("madi");
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    }
img.onclick = function () {
      var interval = setInterval(moveRight, 50);
 }; */
 
 
 //counter code
var button = document.getElementById("counter");
/*var counter = 0;*/
button.onclick = function () {
   
    //creat the request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it is a variable
    request.onreadystatecharge = function(){
        if (request.readystate === XMLHttpRequest.DONE){
            //Takes some action
            if(request.state --- 200) {
           var counter = request.responeseText;
             var span = document.getElementById("count");
            span.innerHTML = counter.toString();
          }
        }
        //NOT DONE YET
    };
    //make the request
    request.open('GET','http://kalaivanivadivelu12.imad.hasura-app.io/counter',true);
    request.send(null);
    
};
//render the variable in the correct span
  /* counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
    };*/
    
    //submite name
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    var submite = document.getElementById("submit_btn");
    //make a request to a server and send the name 
    
    //capture a list of name render it as a lits
    var names = ['name one','name two','name three'];
    var list = '';
    for(var i=0;i< names.length;i++) {
        list += '<li>' + name[i] + '<li>';
  }
  var ul = document.getElementById("namelist");
  ul.innerHTML = list;
};
  