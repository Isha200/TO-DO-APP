require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const notesRoutes = require("./routes/notes");
mongoose.set('strictQuery', true);

//function that we invoke, creates the express app for us. stored in the constant
const app = express();

//middleware
//middleware code between server and request
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/notes", notesRoutes);

//connet to DB
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected to the DB and listening on", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });


