const express = require("express");
const productControllers = require("./../controllers/productControllers");
const authControllers = require("../controllers/authControllers");
const router = express.Router();

router.get("/getAllProducts", productControllers.getAllProducts);
router.get("/getProduct/:productId",
  productControllers.putProductOnReq,
  productControllers.getProduct
);
router.put(
  "/updateProduct/:productId",
  authControllers.protect,
  productControllers.putProductOnReq,
  productControllers.checkIfSeller,
  productControllers.productPhotoUpload,
  productControllers.productPhotoReOrg,
  productControllers.updateProduct
);
router.put(
  "/deleteAllProductImages/:productId",
  authControllers.protect,
  productControllers.putProductOnReq,
  productControllers.checkIfSeller,
  productControllers.deleteAllProductImages,
);

router.put(
  "/deleteOneProductImage/:productId",
  authControllers.protect,
  productControllers.putProductOnReq,
  productControllers.checkIfSeller,
  productControllers.deleteOneProductImage,
);

router.delete(
  "/deleteProduct/:productId",
  authControllers.protect,
  productControllers.putProductOnReq,
  productControllers.checkIfSeller,
  productControllers.deleteProduct
);

router.post(
  "/createProduct",
  authControllers.protect,
  productControllers.createProduct
);

module.exports = router;