let express = require("express"),
    PORT = process.env.PORT || 3000,
    server = express(),
    path = require("path");

server.use(express.static(path.join(__dirname, 'public')));

server.set('views', path.join(__dirname, 'views'));
server.set("view engine", "ejs");

server.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname,"home.html"));
    // let data = { title: "Home", description: "This is my home page from express to EJS" }
    res.render("index", { title: "Home", description: "This is my home page from express to EJS" });
});

server.get("/about-us", function (req, res) {
    // res.send("<h1>About</h1>");
    res.render("index", {
        title: "About Us",
        description: "This is about us page."
    });
});

server.get("/services", function (req, res) {
    // res.send("<h1>Services</h1>");
    res.render("index", {
        title: "Services",
        description: "This is services we provide"
    });
});

server.get("/contact-us", function (req, res) {
    // res.send("<h1>Contact Us</h1>");
    res.render("index", {
        title: "Contact Us",
        description: "This is how you can Contact Us."
    });
});

server.listen(PORT, function () {
    console.log("Server started on port: " + PORT);
});
