const express = require("express");
const cors = require('cors')
const mockData = require("./sampleData.js")

let app = express();

app.use(cors())

async function main() {
  app.get("/questions", (req, res) => {
    console.log("UI requested for questions")
    return res.json(mockData.testQuestions)
  })

  app.get("/answers", (req, res) => {
    console.log("UI requested for answers")
    return res.json(mockData.testAnswers)
  })

  app.get('/rejected-promise', (req, res) => {
    const error = new Error('Rejected Promise.')
    return Promise.reject(error)
  })



}

main();

app.listen(4000, () => {
  console.log("Server has started");
});