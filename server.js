const express = require("express");
const cors = require('cors')

let app = express();

app.use(cors())

async function main() {
  app.get("/questions", (req,res) => {
    let result = [
        {
            'qnId': '1',
            'prompt': 'Is this question 1?',
            'options': ['Yes' , 'No'],
            'ans': 'Yes',
            'qnTyp': 'mcq'
        }
    ]
    return res.json(result)
  })

  app.get('/rejected-promise', (req,res) => {
    const error = new Error('Rejected Promise.')
    return Promise.reject(error)
  })



}

main();

app.listen(4000, () => {
  console.log("Server has started");
});