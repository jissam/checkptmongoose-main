//import express
const express = require("express");
const {
  createPerson,
  findByName,
  findByidperson,
  findAllPersons,
  addhamburger,
  deletebyid,
  updateDatabyid,
} = require("../controllers/personController");

const personRouter = express.Router();

personRouter.post("/add", createPerson);
personRouter.get("/name/:searchedName", findByName);
personRouter.get("/id/:searchid", findByidperson);
personRouter.get("/all/", findAllPersons);
personRouter.put("/addhamburger/:id", addhamburger);
personRouter.put("/update/:id", updateDatabyid);
personRouter.delete("delete/:deletedid", deletebyid);

module.exports = personRouter;
