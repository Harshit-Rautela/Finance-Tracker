import express from 'express';
import cors from 'cors'
import paymentRoutes from './payment.js'
const app = express();

const PORT = 5555;

app.use(cors());
app.use(express.json());

app.use('/payment',[paymentRoutes])
app.get('/',(req,res)=>{
    console.log("The request is",req);
    res.status(200).send("Welcome to Finance Tracker.")

})

app.listen(PORT,()=>{
    console.log(`Server is listening on PORT:${PORT}`);
})