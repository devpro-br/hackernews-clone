const data = require('../data')

module.exports = {
  listNews: (req, res) => {
    const result = data.news
    res.send(result)
  },
}
