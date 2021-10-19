const datahelper = require('../datahelper')

module.exports = {
  news: datahelper.parseJson('./data/news.json'),
}
