const express = require("express");
const router = express.Router();
const {
  CreateOrder,
  AddProduct,
  AddCustomer,
  AddSuppliers,
} = require("../controllers/Controller");

router.post("/createorder",CreateOrder);
router.post("/addproduct",AddProduct);
router.post("/addcustomer",AddCustomer);
router.post("/addsupplier",AddSuppliers);

module.exports = router;
