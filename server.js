const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require("mongoose");
const routes = require("./routes");

require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactbooklist");

const server = app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  // here you can start emitting events to the client 
  socket.on('book saved', (title) => {  
    io.emit('book saved', title);
  });
});