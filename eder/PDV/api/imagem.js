const screenshot = require('screenshot-desktop')
const fs = require('fs')
const path = require('path')

module.exports = app => {
  const printContent = async (req, res) => {
    await screenshot({ filename: 'demo.png' })
    return res.send(fs.readFileSync(path.join(path.resolve("./"), 'demo.png')).toString('base64'))
  }

  return { printContent }
}