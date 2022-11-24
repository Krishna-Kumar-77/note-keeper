const path = require('path')
const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./db/db')

connectDB()
 
port = process.env.PORT || 5000; 
  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routers/noteRoute'))
app.use('/users', require('./routers/userRoutes'));

// Server frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../note-keeper/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'note-keeper', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }

app.use(errorHandler)
app.listen(port, () => {
    console.log(`server started on port ${port}`);
}) 