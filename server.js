const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const homeRoutes = require("./routes/homeRoutes");
const apiRoutes = require("./routes/apiRoutes");

app.use("/", homeRoutes);
app.use("/api/v1", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
