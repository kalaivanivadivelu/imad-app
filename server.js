   var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
  
   var articals = {
   ' artical-one' : {
       title: 'artical-one kalai',
       heading: 'artical.one' ,
       date: 'sep 17,2017',
       content:`
             <p>
                this my first artical one 
                </p>`
},
    'artical-two' : {
     title: 'artical-two  kalai',
    heading: 'artical.two' ,
    date: 'sep 10,2017',
    content:`
             <p>
                this my second artical two.
                </p>`
},
    'artical-three' : {
     title: 'artical-three  kalai',
    heading: 'artical.three' ,
    date: 'sep 01,2017',
    content:`
             <p>
                this my third artical three.
                </p>`
}
};
 
 function createTemplate(data){
     var title = data.title;
     var date = data.date;
     var heading = data.heading;
     var content = data.content;
     
     var htmlTemplate =`
    <html>
           <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />  
            </head>
      <body>
            <div class="container">
         <div>
            <a href="/">home</a>
        </div>
        <hr/>
      <h1>
         ${heading}
      </h1>
        <div>
          ${date}
        </div>
        <div>
          ${content}
        </div>
      </div>
     </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articalName',function(req,res){
    //articalName==artical-one
    //articals[articalname]== {} content object for artical-one
    var articalName=req.params.articalName;
     res.send(createTemplate(articals[articalName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
 var port = 80;// Use 8080 only for local development if you already have apache running on 80
app.listen(port, function () {
console.log(`IMAD course app listening on port ${port}!`);
});