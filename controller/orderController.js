const Order = require("../model/order");
const orderController = {
  createOrder: async (req, res) => {

    let order = new Order(req.body);
    try {
      const newOrder = await order.save();
      res.status(200).json(newOrder);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateOrder: async (req, res) => {
    try {
      const updateOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateOrder);
    } catch (error) {
      res.status(500).json(err);
    }
  },

  deleteOrder: async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been delete...");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getOrder: async (req, res) => {
    try {
      const orders = await Order.find({ userId: req.params.userId });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAll: async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getIncome : async(req, res)=> {
    const date = new Date();
    const  lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const  previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() -2));
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income)
    } catch (error) {
      res.status(500).json({msg: 'loi'})
    }
  }
};

module.exports = orderController;
