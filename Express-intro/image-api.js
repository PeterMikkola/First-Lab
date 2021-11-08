const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (request, response) => {
    console.log("Vår request funkar!");
    response.sendFile("index.html");
});


app.get("/about", (req, res => {
    console.log("Vår request till about funkar!");
    res.sendFile(__dirname + "/public/about.html");
}));

app.get("/about/image", (req, res => {
    console.log("Vår request till image funkar!");
    res.sendFile(__dirname + "/public/image.jpeg");
}));

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});