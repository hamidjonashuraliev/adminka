const express = require("express");
const router_bssr = express.Router();
const storeController = require("./controllers/storeController");
const productController = require("./controllers/productController");
const { uploadProductImage } = require("./utils/upload-multer");

/********************************
 *            BSSR EJS         *
 *******************************/

router_bssr
    .get("/signup", storeController.getSignupMyStore)
    .post("/signup", storeController.signupProcess);

router_bssr
    .get("/login", storeController.getLoginMyStore)
    .post("/login", storeController.loginProcess);
router_bssr.get("/logout", storeController.logout);
router_bssr.get("/check-me", storeController.checkSessions);

router_bssr.get("/products/menu", storeController.getMyStoreData);
router_bssr.post(
    "/products/create",
    storeController.validateAuthStore,
    uploadProductImage.single("product_image"),

    productController.addNewProduct
);
router_bssr.post("/products/edit/:id", productController.updateChosenProduct);

module.exports = router_bssr;
