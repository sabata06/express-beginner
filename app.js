"use strict";
/*----------------------------------------------------------------------------------
                                EXPRESSJS
---------------------------------------------------------------------------------*/

//! Starter commands
//? npm init y
//? npm i express dotenv

/*ExpressJS Start */
const express = require("express");
const app = express();

/*ENV */
require("dotenv").config();

const HOST = process.env?.HOST || "localhost";
const PORT = process.env?.PORT || 8000;
/*----------------------------------------------------------------------------------*/
/**http_methods & urls */
// app.get("/", (request, response) => {
//   // response.send('<h1>Welcome to Express</h1>')
//   response.send({ message: 'called in "get" method' });
// });
// app.post("/",(req, res) =>res.send({ message: 'called in "post" method'}))
// app.put("/",(req, res) =>res.send({ message: 'called in "put" method'}))
// app.delete("/",(req, res) =>res.send({ message: 'called in "delete" method'}))


//----------**////

/*----------------------------------------------------------------------------------*/
// app.listen(PORT, () => console.log(`Running on ${HOST}:${PORT}`))
app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`));
/*----------------------------------------------------------------------------------*/
