const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const TARGET_URL = "https://missionpay.up.railway.app/";

app.get("/:alias", (req, res) => {
  // We don't care what alias is; all redirect to TARGET_URL
  res.redirect(TARGET_URL);
});

app.get("/", (req, res) => {
  res.send("✅ Shortlink redirector running. All aliases redirect to same URL.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
