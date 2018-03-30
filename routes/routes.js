var appRouter = function (app) {
  app.get("/", function (req, res) {
    res.status(200).send("Welcome to our restful API");
  });

  app.get("/results", function (req, res) {
    res.status(200).send('req: ', req)
  })
}

module.exports = appRouter;