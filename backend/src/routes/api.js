const express = require("express");
const {
  registerUser,
  userInfoUpdate,
  getUsers,
  deleteUserInfo,
  getUserInfoByEmail,
} = require("../controllers/UserController");
const {
  CreateProduct,
  UpdateProduct,
  deleteProduct,
  readProduct,
} = require("../controllers/ProductController");
const {
  createOder,
  OderListUpdate,
  cancelOderByOrderId,
} = require("../controllers/OrderController");
const {
  addProduct,
  updateCartProduct,
  removeProduct,
  cartProduct,
} = require("../controllers/CartItemController");

const router = express.Router();

//user
router.post("/register", registerUser);
router.post("/userInfoUpdate/:ID", userInfoUpdate);
router.get("/deleteUserInfo/:email", deleteUserInfo);
router.get("/getUserInfoByEmail/:email", getUserInfoByEmail);
router.get("/users", getUsers);

// product
router.post("/create_Product", CreateProduct);
router.post("/update_Product/:ID", UpdateProduct);
router.get("/delete_Product/:ID", deleteProduct);
router.get("/read_Product", readProduct);

// Order
router.post("/createOrder", createOder);
router.post("/OderListUpdate/:userId", OderListUpdate);
router.get("/cancelOderByOrderId/:orderID", cancelOderByOrderId);

//cart
router.post("/add_Product", addProduct);
router.post("/updateCartProduct/:ID", updateCartProduct);
router.get("/removeProduct/:ID", removeProduct);
router.get("/cart", cartProduct);

module.exports = router;
