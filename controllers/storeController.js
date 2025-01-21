const Member = require("../models/Member");

const { signup } = require("./storeController");

let storeController = module.exports;

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
        console.log("POST: cont/signup"),
            (data = req.body),
            (member = new Member()),
            (new_member = await member.signupData(data));

        res.json({ state: "succeed", data: new_member });
    } catch (err) {
        console.log(`ERROR, cont/signup, ${err.message}`);
        res.json({ state: "fail", message: err.message });
    }
};

storeController.getLoginMyStore = async (req, res) => {
    try {
        console.log("GET: cont/getLoginMyStore");
        res.render('login-page');
    } catch (err) {
        console.log(`ERROR, cont/getLoginMyStore, ${err.message}`);
        res.json({ state: "fail", message: err.message });
    }
};

storeController.loginProcess = async (req, res) => {
    try {
        console.log("POST: cont/login"),
            (data = req.body),
            (member = new Member()),
            (result = await member.loginData(data));

        res.json({ state: "succeed", data: result });
    } catch (err) {
        console.log(`ERROR, cont/login, ${err.message}`);
        res.json({ state: "fail", message: err.message });
    }
};

// storeController.logoutProcess = (req, res) => {
//     console.log("GET cont.logout");
//     res.send("Logout Page");
// };
