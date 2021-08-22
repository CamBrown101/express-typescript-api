import express from "express"
import mongoose from 'mongoose'
const app = express();

//Connect to DB
const mongooseConnect: string = 'mongodb+srv://cam:test123@cluster0.ber4a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongooseConnect, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB'))

//Import Routes
const authRoute = require('./routes/auth');


//Route Middlewares
app.use('/api/user', authRoute)


const port = process.env.POrt || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));