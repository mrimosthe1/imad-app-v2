var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

    var articles= {
    'article-one': {
        title:"Article One",
        heading:"Article one",
        date:"March 19,2017",
        content: ` <p>I dont know what this page is for but trying the features out. I dont know what this page is for but trying the features out.I dont know what this page is for but trying the features out.</p><br>
               
                   <p>I dont know what this page is for but trying the features out. I dont know what this page is for but trying the features out.I dont know what this page is for but trying the features out.</p><br>
               
                  <p>I dont know what this page is for but trying the features out. I dont know what this page is for but trying the features out.I dont know what this page is for but trying the features out.</p>`
               
    },
    'article-two':{   title:"Article 2",
        heading:"Article one",
        date:"March 1,2017",
        content: ` <p>I dont know what this page is for but trying the features out. I dont know what this page is for but trying the features out.I dont know what this page is for but trying the features out.</p><br>
               
                    
                  <p>I dont know what this page is for but trying the features out. I dont know what this page is for but trying the features out.I dont know what this page is for but trying the features out.</p>` },
    'article-three':{title:"Article 3",
        heading:"Article 3",
        date:"March 9,2017",
        content: ` <p>I dont know what this page is for but trying the features out. I dont know what this page is for but trying the features out.I dont know what this page is for but trying the features out.</p><br>
               
                   <p>I dont know what this page is for but trying the features out. I dont know what this page is for but trying the features out.I dont know what this page is for but trying the features out.</p><br>
        `       
    }
    };

    function createTemplate(data){
        var title= data.title;
        var heading=data.heading;
        var date=data.date;
        var content=data.content;
    var htmlTemplate=
    `
    <html>
    <head>
    <title>
    
    ${title}
    </title>
    
    <meta name="viewport" content="width-device-width, initial-scale-1 "/>
    <link href="/ui/style.css" rel="stylesheet" />
    </head> 
    <body>
           <div class="container">
               <div>
                     <href url= "/"></href>
           </div>
           <br>
           <div>
               <h1> 
               ${heading}
               </h1>
          </div>
          
          <div>
               <h2>
                  ${date}
                   </h2>
          </div>
          
          <div>
               ${content}
           
           </div>
         </div>
    
    </body>
    </html>
    `
    return htmlTemplate;
    }    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
   counter++;
   res.send(counter.toString());
});
app.get('/:articleName', function (req, res) {
    //aticleName=article-One
    var articleName=req.params.articleName;
     res.send(createTemplate(articles[articleName]));
     //articles[articleName]=content object of articleOne
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
