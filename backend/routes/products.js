const express = require("express");
const router = express.Router();
const  protect  = require("../middleware/auth");
const {
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  fetchAllProducts,
} = require("../controllers/product");

router.route("/").get( fetchAllProducts);


const { upload } = require("../utils/fileUpload");

router.post("/", protect, upload.single("image"), createProduct);
router.patch("/:id", protect, upload.single("image"), updateProduct);
router.get("/:id", protect, getProduct);
router.delete("/:id", protect, deleteProduct);

module.exports = router;