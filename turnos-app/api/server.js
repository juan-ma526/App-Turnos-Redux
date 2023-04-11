const express = require("express");
const mongoose = require("mongoose");
const client = require("./config/db.js");
const router = require("./routes");
const cookieparser = require("cookie-parser");

const app = express();
const cors = require("cors");
require("dotenv").config();

const { registerUser, allUsers } = require("./controllers/user");

app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    optionsSuccessStatus: 200,
    allowedHeaders: [
      "Access-Control-Allow-Credentials",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Cross-Origin",
      "Access-Control-Allow-Methods",
      "Origin",
      "WithCredentials",
      "X-Requested-Wwith",
      "Content-Type",
      "Accept",
      "Authorization",
      "X-HTTP-Method-Override",
      "Set-Cookie",
      "Cookie",
      "Request",
    ],
  })
);

app.use(express.json());
app.use("/api", router);
app.get("/allUsers", allUsers);
app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);
app.use(cookieparser());

app.listen(process.env.PORT, () => {
  console.log("Server connected on PORT 3001");
});

//Swagger-DOC initial config

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Turnos App",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

