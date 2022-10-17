const { presidentData } = require("../data/main.json");

const getAllPresidents = (req, res) => {
  try {
    if (presidentData)
      return res.status(201).json({ msg: "Successful!", presidentData });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// const getPresident = (req, res) => {
//   // console.log(req.params);
//   try {
//     const { name } = req.params;
//     let singlePresident = {};
//     presidentData.forEach((president) => {
//       if (president.name.toLowerCase() === name) {
//         singlePresident = president;
//       }
//     });
//     res.status(201).json({ msg: "Successful!", singlePresident });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// module.exports = { getAllPresidents, getPresident };

module.exports = { getAllPresidents };
