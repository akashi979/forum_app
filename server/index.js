const express = require ("express")
const mongoose = require ("mongoose")
const app = express ();
const cors = require ("cors")
const UserModel = require ("./models/users")

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://forumlake:Coldicecream953.@cluster0.whoioab.mongodb.net/forumriver?retryWrites=true&w=majority");


app.get("/",(req,res)=>{

res.json({"message":"it worked"})

})




app.get("/getUsers", (req, res) => {

    UserModel.find({}).
    then((err, result) => {
        if (err) {
           res.json(err);
        } else {
     res.json(result);
         
        }
      }) ;
  });    
  
app.post("/createUsers",async(req,res)=>{

  const user =req.body;
  const newUser =new UserModel(user);
  await newUser.save();
  res.json(user);
})

const PORT = process.env.port | 3001 ;
app.listen(PORT,()=>{

    console.log("works wel ${PORT}");
     
});
