const express = require("express")
const app = express();
const PORT = 80;

const fs = require("fs")
/*ENGINE*/
app.engine("html", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            return callback(err)
        }

        return callback(null, content.toString())
    })
})
/*///*/
app.set("view engine", "html")
app.set("views", "./views")
app.use(express.static("static"))

app.get("/", (req, res) => {
    res.render("index")
})
app.get("/about", (req, res) => {
    res.render("index")
})

app.listen(PORT, () => {
    console.log("Server initilized");
})