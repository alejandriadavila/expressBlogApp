const express = require("express")
const bodyParser = require("body-parser")

// These are now route imports, not database imports!
const users = require("./routes/users")
const posts = require("./routes/posts")

const app = express()
const port = 3000

// Parsing Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))

// Use our Routes
app.use("/api/users", users)
app.use("/api/posts", posts)

app.get("/", (req, res) => {
  res.send("Work in progress!")
})

// 404 Middleware
app.use((req, res) => {
  res.status(404)
  res.json({ error: "Resource Not Found" })
})

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`)
})
