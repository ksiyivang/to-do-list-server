

const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.status(200)
})



const PORT = "5001"

app.listen(PORT, () => { console.log("Server is running on port : ", PORT) })