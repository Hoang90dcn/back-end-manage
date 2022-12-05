const Products = require("../model/Products");
const path = require('path');

class ProductController {
  index(req, res, next) {
    const page = req.query.page || 1;
    const itemInPage = req.query.item || 2;
    console.log(req.query.page);
    console.log("page ", page);
    Products.find({})
      .sort({ updatedAt: -1 })
      .skip(page * itemInPage - itemInPage)
      .limit(itemInPage)
      .then((data) => {
        Products.countDocuments({}).then((count) => {
          const products = data.map((data) => data.toObject());
          res.render("product", {
            products,
            currentPage: page,
            pages: Math.ceil(count / itemInPage),
          });
        });
      })
      .catch(next);
  }
  // save product data
  create(req, res, next) {
    let formData = req.body;  
    console.log("Form data ", req.body);
    const newProducts = new Products(
      {
        id: formData.id,
        name: formData.name,
        price: formData.price,
        type: formData.type,
        image: req.file.filename,
        quantity: formData.quantity,
      }
    );
    newProducts.save();
    res.redirect("/product");
  }

  async delete(req, res, next)
  {
    console.log("ID: ",req.query.id);
   try {
     const product = new Products({
       id: req.params.id,
     });
     await product.remove();
   } catch (error) {
     console.log(error);
   }
    // res.redirect("/product");
  }
  update(req, res, next)
  {

  }
}

module.exports = new ProductController();
