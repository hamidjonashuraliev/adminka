const express = require("express");
const router_bssr = express.Router();
const storeController = require("./controllers/storeController");

/********************************
 *            BSSR EJS         *
 *******************************/

router_bssr.get("/signup", storeController.getSignupMyStore);
router_bssr.post("/signup", storeController.signupProcess);

router_bssr.get("/login", storeController.getLoginMyStore);
router_bssr.post("/login", storeController.loginProcess);


// router_bssr.get("/logout", storeController.logout);
// router_bssr.get(".logout", storeController.logout)

module.exports = router_bssr;
