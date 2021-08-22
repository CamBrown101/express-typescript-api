import express from "express"
const app = express();

//Import Routes
const authRoute = require('./routes/auth');


//Route Middlewares
app.use('/api/user', authRoute)


const port = process.env.POrt || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));