const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

// BECAUSE I'M USING DIFFERENT PORTS FOR BE & FE
// THIS ADDS THE HEADERS IN THE BROWSER TO ALLOW MY API
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// I WANT TO PARSE JSON FROM THE REQ.BODY
app.use(express.json());

// WHEN A PUT REQUEST IS MADE TO MY /API URL
// PULL THE REQ.BODY DATA AND SEND IT TO MY writeToFile FUNCTION
app.put("/api", (req, res) => {
  const formData = req.body;
  const fileName = setFileName(formData.firstName, formData.lastName);
  writeToFile(formData, fileName);

  res.status(200).send("Form data received");
});

// START THE SERVER AND LISTEN ON PORT 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

function setFileName(firstName, lastName) {
  const date = new Date();

  const formattedDate = date
    .toLocaleDateString("en-US", { month: "short", day: "2-digit" })
    .toUpperCase()
    .replace("/", "-")
    .replace(" ", "");

  const formattedTime = date
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(":", "");

  const fileName = `${formattedDate}-${formattedTime}-${firstName}${lastName}.json`;
  return fileName;
}

// USE THE PATH PACKAGE TO BE ABLE TO REFERENCE THE ROOT DIRECTORY
// CREATE THE FILE PATH AND PASS IT INTO fs.writeFile
function writeToFile(formData, fileName) {
  const filePath = path.join(__dirname, fileName);

  fs.writeFile(filePath, JSON.stringify(formData), (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Data written to file successfully");
    }
  });
}
