var express = require("express");
var bodyParser = require("body-parser")  // install to npm install body-parser
var app = express();

app.use(express.static("public")) // serve the static files form public folder
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) =>{
    // res.send("This is / Path");
    res.sendFile(__dirname + "/public/home.html");
});
// a)/data -> Respond "this is data"
app.get("/data", (req, res) =>{
    res.send("This is Data");
});
// b)/profile -> Respond "this is profile"
app.get("/profile", (req, res) =>{
    res.send("This is Profile");
});
//addition.html
app.get("/add", (req, res)=>{
    var data= req.query;
    var result=  Number(data.num1)+ Number(data.num2);
    res.send("Result is: " + result)
})
//substraction.html
app.get("/sub", (req, res)=>{
    var data= req.query;
    var result=  Number(data.num1)- Number(data.num2);
    res.send("Result is: " + result)
})
//multiplication.html
app.get("/mul", (req, res)=>{
    var data= req.query;
    var result=  Number(data.num1)* Number(data.num2);
    res.send("Result is: " + result)
})
//division.html
app.get("/div", (req, res)=>{
    var data= req.query;
    var result=  Number(data.num1)/ Number(data.num2);
    res.send("Result is: " + result)
})
//3.Create calculator.html
app.post("/calc", (req, res)=>{
    var data= req.body;
    if(data.opr == "add"){
    var result=  Number(data.num1)+ Number(data.num2);
    res.send("Result is: " + result)
    }
    else if(data.opr == "sub"){
        var result=  Number(data.num1)- Number(data.num2);
        res.send("Result Subtract=: " + result)
    }
    else if(data.opr == "mul"){
        var result=  Number(data.num1)* Number(data.num2);
        res.send("Result Multipy=: " + result)
    }
    else if(data.opr == "div"){
        var result=  Number(data.num1)/ Number(data.num2);
        res.send("Result Divide=: " + result)
    }
    else if(data.opr == "mod"){
        var result=  Number(data.num1)% Number(data.num2);
        res.send("Result Modulas=: " + result)
    }
    else{
        res.send("Wrong option")
    }
})

//4. register code
app.post("/reg", function(req, res) {
    var data = req.body, fname = data.fname, dob = data.dob, phone = data.phone;
    var email = data.email, gender = data.gender,lang = data.lang, state = data.state;
    
    var formData = "Name: " + fname + "<br>" +
                       "DOB: " + dob + "<br>" +
                       "Phone: " + phone + "<br>" +
                       "Email: " + email + "<br>" +
                       "Gender: " + gender + "<br>" +
                       "Language: " + lang + "<br>" +
                       "State: " + state;                       
    res.send(formData);
    console.log(data);
  });

app.listen(8000, ()=>{
    console.log("Server running at 8000");
});