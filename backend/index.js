import express from "express";
import users from './MOCK_DATA.json' assert { type: "json" };

const app = express();

const PORT = 4000;

app.use(express.json())
app.get('/', (req,res)=>{
res.json(users)
})
app.get('/user', (req,res) =>{
    const user = users.map(user => user.first_name).join(" ")
    res.json(user)
})

app.post('/', async (req, res) => {
  try {
    const { first_name } = req.body; 

    const newUser = await users.create({ first_name });

 
    const allUsers = await users.findOne({_id:id});

    const modify = await Users.findByIdAndUpdate(id,{ isrequired:true})
    const create = await Users.create({name, email, password:hashpassword})


     const modifys = await Users.findByIdAndDelete(id)

     const token =  jwt.sign({id: user.id}, process.env.JWT, {expiresIn:"7d"})
     res.send(token)


    res.json(allUsers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))