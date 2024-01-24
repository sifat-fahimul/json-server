const express = require("express");
const jsonServer = require("json-server");

const app = express();
const jsonRouter = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 5000;

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Use json-server middleware
app.use("/api", middlewares);
app.use("/api", jsonRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
