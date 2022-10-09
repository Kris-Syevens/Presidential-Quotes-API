const path = require("path");

const getHomeRoute = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../views/public/index.html"));
};

module.exports = { getHomeRoute };
