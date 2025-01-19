let memberController = module.exports;

memberController.home = (req, res) => {
    console.log("GET cont.home");
    
    res.send("Home Page");
};

memberController.signup = (req, res) => {
    console.log("POST cont.signup");

    res.send("Signup Page");
};

memberController.login = (req, res) => {
    console.log("POST cont.login");

    res.send("Login Page");
};

memberController.logout = (req, res) => {
    console.log("GET cont.logout");

    res.send("Logout Page");
}; 
