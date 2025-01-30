const assert = require("assert");
const Member = require("../models/Member");
const Product = require("../models/Product");
const Definer = require("../lib/mistake");

let storeController = module.exports;

storeController.home = (req, res) => {
    try {
        console.log("GET: cont/home");
        res.render("home-page");
    } catch (err) {
        console.log(`ERROR, cont/home, ${err.message}`);
        res.json({ state: "fail", message: err.message });
    }
};

storeController.getMyStoreProducts = async (req, res) => {
    try {
        console.log("GET: cont/getMyStoreProducts");
        const product = new Product();
        const data = await product.getAllProductsDataStor(res.locals.member);
        res.render("store-menu", { store_data: data });
    } catch (err) {
        console.log(`ERROR, cont/getMyStoreProducts, ${err.message}`);
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
        console.log("POST: cont/signupProcess");
        assert.ok(req.file, Definer.general_err3);

        let new_member = req.body;
        new_member.mb_type = "STORE";
        new_member.member_image = req.file.path;

        const member = new Member();
        const result = await member.signupData(new_member);
        assert.ok(result, Definer.general_err1);

        req.session.member = result;
        res.redirect("/resto/products/menu");
    } catch (err) {
        console.log(`ERROR, cont/signupProcess, ${err.message}`);
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
        console.log("POST: cont/loginProcess");
        const data = req.body;
        member = new Member();
        result = await member.loginData(data); ///

        req.session.member = result;
        req.session.save(function () {
            result.mb_type === "ADMIN"
                ? res.redirect("/resto/all_store")
                : res.redirect("/resto/products/menu");
        });
    } catch (err) {
        console.log(`ERROR, cont/loginProcess, ${err.message}`);
        res.json({ state: "fail", message: err.message });
    }
};

storeController.logout = (req, res) => {
    console.log("GET cont/logout");
    res.send("Logout Page");
};

storeController.validateAuthStore = (req, res, next) => {
    const session = req.session;
    if (req.session?.member?.mb_type === "STORE") {
        req.member = req.session.member;

        next();
    } else
        res.json({
            state: "fail",
            message: "only authenticated members with store type",
        });
};

storeController.checkSessions = (req, res) => {
    if (req.session?.member) {
        res.json({ state: "succeed", data: req.session.member });
    } else {
        res.json({ state: "fail", message: "you are not authenticated" });
    }
};
