const express = require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const userRouter=require('./router/userRouter');
const path = require('path'); 
const app = express();
app.use(bodyParser.json());
const PORT = 3001;

app.use(userRouter);


app.use(express.static(path.join(__dirname, '../project/dist'))); 


// 2. Example API route
app.get('/api/message', (req, res) => {
  res.json({ text: 'Hello from backend API' });
});

// 3. Catch-all route to handle React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../project/dist/index.html')); 
  
});

mongoose.connect("mongodb+srv://sameerpatel985125:7905357407@cluster0.7wo3o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("db connect successfully"))
.catch((err) => console.log("an error has occured"));


app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
