const express = require("express");
const router_bssr = express.Router();
const storeController = require("./controllers/storeController");
const productController = require("./controllers/productController");
const uploader_product = require("./utils/upload-multer")("products");
const uploader_members = require("./utils/upload-multer")("members");

/********************************
 *            BSSR EJS         *
 *******************************/

router_bssr.get("/", storeController.home);

router_bssr
    .get("/sign-up", storeController.getSignupMyStore)
    .post(
        "/sign-up",
        uploader_members.single("store_img"),
        storeController.signupProcess
    );

router_bssr
    .get("/login", storeController.getLoginMyStore)
    .post("/login", storeController.loginProcess);
router_bssr.get("/logout", storeController.logout);
router_bssr.get("/check-me", storeController.checkSessions);

router_bssr.get("/products/menu", storeController.getMyStoreProducts);
router_bssr.post(
    "/products/create",
    storeController.validateAuthStore,
    uploader_product.array("product_images", 5),
    productController.addNewProduct
);
router_bssr.post(
    "/products/edit/:id",
    storeController.validateAuthStore,
    productController.updateChosenProduct
);
router_bssr.get(
    "/all-stores",
    storeController.validateAdmin,
    storeController.getAllStores
);

module.exports = router_bssr;
