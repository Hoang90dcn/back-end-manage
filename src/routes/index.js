const productRoutes =require('./product');
function routes(app)
{
  // controller
  app.get("/", (req, res) => {
    res.render("home");
  });

  app.use("/product",productRoutes);

  app.post("/search", (req, res) => {
    console.log(req.body);
    res.render("home");
  });
}
module.exports = routes;
