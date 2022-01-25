const Car = require("../models/car");
const express = require("express");
const router = express.Router();

//GET handles showing the data in componentdidmount
router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.send(cars);
  } catch (error) {
    res.send(error);
  }
});

//POST handles new cars being added
router.post("/", async (req, res) => {
  try {
    const car = await new Car(req.body).save();
    res.send(car);
  } catch (error) {
    res.send(error);
  }
});

//DELETE removes car doc from database using id
router.delete("/:id", async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    res.send(car);
  } catch (error) {
    res.send(error);
  }
});

//PUT handles editing of car docs
router.put("/:id", async (req, res) => {
  try {
    const car = await Car.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.send(car);
  } catch (error) {
    res.send(error);
  }
});

//below is the find cars older than 5 years function
router.get("/older", async (req, res) => {
  try {
    const cars = await Car.find({ model: { $lt: 2016 } });
    res.send(cars);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
