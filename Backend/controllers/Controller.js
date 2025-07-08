async function CreateOrder(req, res) {
  res.status(200).json({ message: "api access" });
}
async function AddProduct(req, res) {}
async function AddCustomer(req, res) {}
async function AddSuppliers(req, res) {}
module.exports = {
  CreateOrder,
  AddProduct,
  AddCustomer,
  AddSuppliers,
};
