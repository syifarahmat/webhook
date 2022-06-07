// Require express and body-parser
const express = require("express")
const bodyParser = require("body-parser")
// Initialize express and define a port
const app = express()
const PORT = 3000
// Tell express to use body-parser's JSON parsing
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))

//...
app.get("/hook/", (req, res) => {
  console.log(req) // Call your action on the request here
  res.status(200).end() // Responding is important
})
app.post("/hook/", (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
})
//...