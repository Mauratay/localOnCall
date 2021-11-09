const functions = require("firebase-functions")

exports.retrieve = functions.https.onCall((req, res) => {
  // Response.send("This is Data")
  return "This is data"
})