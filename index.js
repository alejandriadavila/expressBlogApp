const express = require("express")
const app = express()
const port = 3000

// Middleware definition
const bodyParser = require("body-parser")

// Use the body-parser middleware so that we have access to parsed data in routes
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))

// Import data from the fake database files
const users = require("./data/users")
const posts = require("./data/posts")

// All routes
app
    .route("/api/users")
    .get((req, res) => {
        res.json(users)
    })
    .post((req, res) =>{
        if (req.body.name && req.body.username && req.body.email){
            if (users.find((u) => u.username == req.body.username)){
                res.json({error: "Username Already Taken"})
                return
            }

            const user = {
                id: users[users.length - 1].id + 1,
                name: req.body.name,
                username: req.body.username,
                email: req.body.email
            }

            user.push(user)
            res.json(users[users.length -1])
        } else res.json({error: "Insufficient Data"})
    })

// Port listening Info
app.listen(port, () =>{
    console.log(`Server listening on port: ${port}`)
})