require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/Routes");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
