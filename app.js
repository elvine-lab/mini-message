const express = require("express");
const path = require("node:path");
const indexRouter = require("./routes/index")

const app = express();

app.use(express.urlencoded({ extended: true}))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath))

app.use("/", indexRouter)



const PORT = 7626;
app.listen(PORT, ()=>{
    console.log(`listenig to http://localhost:${PORT}`)
})