const Products = require("../model/Products");

class ProductController {
  index(req, res, next) {
    const page = req.query.page || 1;
    const itemInPage = req.query.item || 2;
    console.log(req.query.page);
    console.log("page ",page);
    Products.find({}).sort({updatedAt: -1}).skip((page*itemInPage)-itemInPage).limit(itemInPage)
      .then((data) => {
        Products.countDocuments({}).then(count=>{
          const products = data.map((data) => data.toObject());
          res.render("product", { 
            products,
            currentPage: page,
            pages: Math.ceil(count/itemInPage)
          });
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    let formData = req.body;
    const newProducts = new Products(formData);
    newProducts.save();
    res.redirect("/product");
  }
}

module.exports = new ProductController();
