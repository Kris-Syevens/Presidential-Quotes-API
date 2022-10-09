const getAllPresidents = (req, res) => {
  res.status(201).json({ msg: "successful", data: "All presidential quotes" });
};

const getPresident = (req, res) => {
  res
    .status(201)
    .json({ msg: "successful", data: "All president quotes that match ID" });
};

module.exports = { getAllPresidents, getPresident };
