const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Map aliases to original URLs here
const linkDB = {
  "001": "https://example.com/file1",
  "002": "https://example.com/file2",
  "003": "https://google.com",
  // add more mappings up to 200 or dynamically load them
};

// Route to handle alias redirects like /001, /002 ...
app.get("/:alias", (req, res) => {
  const alias = req.params.alias;
  const redirectURL = linkDB[alias];
  if (redirectURL) {
    res.redirect(redirectURL);
  } else {
    res.status(404).send("❌ Link not found");
  }
});

// Root route for health check
app.get("/", (req, res) => {
  res.send("✅ MissionPay Shortlink Redirector is live!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
