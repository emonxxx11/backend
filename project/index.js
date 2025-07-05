const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Your alias mapping
const linkDB = {
  "-001": "https://example.com/file1",
  "-002": "https://example.com/file2",
  "-003": "https://example.com/file3",
  // Add more as needed
};

// Route handler
app.get("/:alias", (req, res) => {
  const alias = `-${req.params.alias}`;
  const originalURL = linkDB[alias];

  if (originalURL) {
    return res.redirect(originalURL); // redirect to original URL
  } else {
    return res.status(404).send("❌ Link not found");
  }
});

// Root page (optional)
app.get("/", (req, res) => {
  res.send("✅ MissionPay Short Link Redirector is Running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
