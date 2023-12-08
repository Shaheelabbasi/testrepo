const express = require("express");
const app = express();
const Usermodel = require("../Models/usemodel");

async function CreateUser(req, res) {
  try {
    const existinguser = await Usermodel.findOne(req.body);
    if (existinguser) {
      res.json("user already exists");
    } else {
      Usermodel.create(req.body)
        .then(() => console.log("Successfully created user"))
        .catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
  }
}

function GetAllUsers(req, res) {
  try {
    Usermodel.find()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  GetAllUsers,
  CreateUser,
};
