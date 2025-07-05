const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const linkDB = {
  "001": "https://google.com",
  "002": "https://youtube.com"
};

app.get("/:alias", (req, res) => {
  const alias = req.params.alias;
  const redirectURL = linkDB[alias];
  if (redirectURL) {
    return res.redirect(redirectURL);
  }
  res.status(404).send("❌ Link not found");
});

app.get("/", (req, res) => {
  res.send("✅ MissionPay Shortlink Redirector is live!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
