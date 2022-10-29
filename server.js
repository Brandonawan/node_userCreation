const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true}))

app.set("view engine", "ejs")
// app.use(logger)

// app.get("/", logger, (req, res) => {
//     // console.log("Here")
//     res.render('index', {text: "world"})
// })

const UserRouter = require("./routes/users")

app.use("/users", UserRouter)

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
