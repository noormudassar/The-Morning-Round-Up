module.exports = {
  getInput: (req, res) => {
    const input = req.body.input;
    res.status(200).send(input);
  },
};
