const express = require("express");
const router_bssr = express.Router();
const storeController = require("./controllers/storeController");

/********************************
 *            BSSR EJS         *
 *******************************/

router_bssr
    .get("/signup", storeController.getSignupMyStore)
    .post("/signup", storeController.signupProcess);

router_bssr
    .get("/login", storeController.getLoginMyStore)
    .post("/login", storeController.loginProcess);

router_bssr.get("/products/menu", storeController.getMyStoreData);
router_bssr.get("/check-me", storeController.checkSessions);

// router_bssr.get("/logout", storeController.logoutProcess);

module.exports = router_bssr;
