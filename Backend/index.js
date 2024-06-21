const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const mlRouter = require('./routes/ml');
const { bot, adapter } = require('./ml/chatbot');


dotenv.config();
const app = express();
app.use(express.json());

const mongodbURL="mongodb+srv://thathsaraniadithyaa:2009Adith@socialconnect.ykuwxon.mongodb.net/Coursedb?retryWrites=true&w=majority&appName=socialConnect";

mongoose.connect(mongodbURL,
    {UseNewUrlParser: true,
    useUnifiedTopology: true
    
    });

    const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

app.use(session({
  secret: 'project', 
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: mongodbURL })
}));

app.use('/api/users', usersRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/ml', mlRouter);


const port = process.env.PORT || 3045;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
