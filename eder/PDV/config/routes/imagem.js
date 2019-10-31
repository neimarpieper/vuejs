module.exports = app => {
  app.route('/img').get(app.api.imagem.printContent)
}