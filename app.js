require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const config = require("./config");
const corsMw = require("./middlewares/cors");
const session = require("./middlewares/session");
const passport = require("passport");
const { server } = config;
const { PORT, environment } = server;
const router = require("./routes");
//database
const Database = require("./utils/database");
Database.connectMongo();
//Database
//if you run behind a proxy (e.g. nginx)
//app.set('trust proxy',1)
app.use(express.json());
//setup cors logic
app.options("*", corsMw); // Allowing all OPTIONS request(*) as long as they are from the whitelisted domain
// Browser use a preflight request before doing the actual request to check the CORS
app.use(corsMw);

//setup cors logic
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (_, res) => res.send("Welcome to vetport server ...."));
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

app.listen(PORT, console.log(`${environment} server started on port ${PORT}`));
