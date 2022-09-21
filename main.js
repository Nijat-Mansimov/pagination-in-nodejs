const express = require("express");
const app = express();
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
const path = require("path")
const blogRouter = require("./src/routers/blogRouter");
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(expressLayout);
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./src/views"));

app.use("/", blogRouter);
app.use("/blogs", blogRouter);


app.listen(3000, ()=>{
    console.log("Server is running on port: http://localhost:3000");
})