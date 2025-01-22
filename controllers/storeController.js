const Member = require("../models/Member");

let storeController = module.exports;

storeController.getMyStoreData = async (req, res) => {
    try {
        console.log("GET: cont/getMyStoreData");
        //TODO: Get my store products

        res.render("store-menu");
    } catch (err) {
        console.log(`ERROR, cont/getMyStoreData, ${err.message}`);
        res.json({ state: "fail", message: err.message });
    }
};

storeController.getSignupMyStore = async (req, res) => {
    try {
        console.log("GET: cont/getSignupMyStore");
        res.render("signup");
    } catch (err) {
        console.log(`ERROR, cont/getSignupMyStore, ${err.message}`);
        res.json({ state: "fail", message: err.message });
    }
};

storeController.signupProcess = async (req, res) => {
    try {
        console.log("POST: cont/signup");
        const data = req.body;
        const member = new Member();
        const new_member = await member.signupData(data);

        req.session.member = new_member;
        res.redirect("/resto/products/menu");
    } catch (err) {
        console.log(`ERROR, cont/signup, ${err.message}`);
        res.json({ state: "fail", message: err.message });
    }
};

storeController.getLoginMyStore = async (req, res) => {
    try {
        console.log("GET: cont/getLoginMyStore");
        res.render("login-page");
    } catch (err) {
        console.log(`ERROR, cont/getLoginMyStore, ${err.message}`);
        res.json({ state: "fail", message: err.message });
    }
};

storeController.loginProcess = async (req, res) => {
    try {
        console.log("POST: cont/login");
        const data = req.body;
        member = new Member();
        result = await member.loginData(data); ///

        req.session.member = result;
        req.session.save(function () {
            res.redirect("/resto/products/menu");
        });
    } catch (err) {
        console.log(`ERROR, cont/login, ${err.message}`);
        res.json({ state: "fail", message: err.message });
    }
};

// storeController.logoutProcess = (req, res) => {
//     console.log("GET cont/logout");
//     res.send("Logout Page");
// };


storeController.checkSessions = (req, res) => {
   if(req.session?.member) {
    res.json({state: 'succeed', data: req.session.member})
   } else {
    res.json({state: 'fail', message: 'you are not authenticated'})
   }
  
};