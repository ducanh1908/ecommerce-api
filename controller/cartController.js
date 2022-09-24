const Cart = require("../model/cart");
const cartController = {
  createCart: async (req, res) => {
    let cart = new Cart(req.body);
    try {
      const newCart = await cart.save();
      res.status(200).json(newCart);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateCart: async (req, res) => {
    try {
      const updateCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateCart);
    } catch (error) {
      res.status(500).json(err);
    }
  },

  deleteCart: async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("cart has been delete...");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getCart: async (req, res) => {
    try {
      const cart = await Cart.find({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = cartController;
