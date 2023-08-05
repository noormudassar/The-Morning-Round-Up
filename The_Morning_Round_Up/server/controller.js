// module.exports = {
//   getInput: (req, res) => {
//     const input = req.body.input;
//     res.status(200).send(input);
//   },
// };

module.exports = {
  getFortune: (req, res) => {
    const fortunes = [
      "A beautiful, smart, and loving person will be coming into your life.",
      "A lifetime of happiness lies ahead of you.",
      "A smooth long journey! Great expectations.",
      "An acquaintance of the past will affect you in the near future.",
      "The harder you work, the luckier you get",
    ];
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },
};
