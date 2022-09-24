
const Product = require("../model/product");
const productController = {

    createProduct : async(req, res) => {
        let product = new Product(req.body);
        try {
            const newProduct = await product.save();
            res.status(200).json(newProduct)
        } catch (error) {
            res.status(500).json(error)
        }
    },

  updateProduct: async (req, res) => {
      try {
        const updateProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updateProduct);
      } catch (error) {
        res.status(500).json(err);
      }
    },

  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been delete...");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
     
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAll: async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let products;
      if(qNew) {
        products = await Product.find().sort({createAt: -1}).limit(1)
      }else if(qCategory) {
        products = await Product.find({
          categories: {
          $in: [qCategory],
        }
      });
      } else {
        products = await Product.find();
      }

      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
};

module.exports = productController;
