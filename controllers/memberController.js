const Member = require("../models/Member");

let memberController = module.exports;

memberController.signup = async (req, res) => {
    try {
        console.log("POST: cont/signup");
        const data = req.body,
            member = new Member(),
            new_member = await member.signupData(data);

        // TODO: AUTHENTICATE BASED ON JWT

        res.json({ state: "succeed", data: new_member });
    } catch (err) {
        console.log(`ERROR, cont/signup, ${err.message}`);
        res.json({ state: "fail", message: err.message });
    }
};

memberController.login = async (req, res) => {
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

memberController.logout = (req, res) => {
    console.log("GET cont.logout");
    res.send("Logout Page");
};
