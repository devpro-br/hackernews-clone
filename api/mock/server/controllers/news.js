const data = require('../data')

module.exports = {
  listNews: (req, res) => {
    res.send({
      result: data.news,
    })
  },
}
