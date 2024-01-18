const express = require("express")
const app = express()
const port = 3000

// Import data from the fake database files
const users = require("./data/users")
const posts = require("./data/posts")

// Index route for Users
app.get("/api/users", (req, res) =>{
    res.json(users)
})

// Index route for showing an individual user
app.get("/api/users/:id", (req, res) =>{
    const user = users.find((u) => u.id == req.params.id)
    if (user) {
        res.json(user)
    }else {
        res.send("User not found")
    }
})

// Index route for Posts
app.get("/api/posts", (req, res) =>{
    res.json(posts)
})

// Show route for POsts
app.get("/api/posts/:id", (req, res) => {
    const post = posts.find((p) => p.id == req.params.id)
    if (post) {
        res.json(post)
    } else {
        res.send("Post not found")
    }
})

app.get("/", (req,res) =>{
    res.send("All usable routes start with /api")
})

app.listen(port, () =>{
    console.log(`Server listening on port: ${port}`)
})