import  Express  from "express";
import userRoute from'./controllers/user.route';
import  Router  from './routes/user.routes';


let app= express();

app.use('/user', router)

app.listen(3000,()=>{
    console.log("hope")
})