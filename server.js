const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
    "mongodb+srv://abuzayd:HH9yw0pe6L7NRlTI@cluster0.stxh8.mongodb.net/johnstore?retryWrites=true&w=majority&appName=Cluster0";
mongodb.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("Mongo DB connection succeed ");
            // console.log(client);
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 7010;
            server.listen(PORT, function () {
                console.log(
                    `The server is running successfully on port:${PORT}, http://localhost:${PORT}`
                );
            });
        }
    }
);
