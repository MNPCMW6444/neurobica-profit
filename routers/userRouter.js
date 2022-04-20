const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const {
      Name,
      Manufacturing,
      Inspection,
      Packaging,
      Production,
      Freights,
      Landingcost,
      Insert,
      PPC,
      Listing,
      Revenue,
      RefFee,
      FBAFee,
      TotalOutPerUnit,
      OneOrderTimeSAAS,
      TotalSAAS,
      LLC,
      Trademark,
      Photographing,
      Unboxing,
      InsertDesign,
      PackagingDesign,
      Samples,
      TotalOneTime,
      UnitsInOrder,
      TotalOutPerOrder,
      TotalInPerOrder,
      MarginPerUnit,
      Orders,
      TotalIn,
      TotalOut,
      TotalProfit,
      TotalMargin,
    } = req.body;

    const newUser = new User({
      Name,
      Manufacturing,
      Inspection,
      Packaging,
      Production,
      Freights,
      Landingcost,
      Insert,
      PPC,
      Listing,
      Revenue,
      RefFee,
      FBAFee,
      TotalOutPerUnit,
      OneOrderTimeSAAS,
      TotalSAAS,
      LLC,
      Trademark,
      Photographing,
      Unboxing,
      InsertDesign,
      PackagingDesign,
      Samples,
      TotalOneTime,
      UnitsInOrder,
      TotalOutPerOrder,
      TotalInPerOrder,
      MarginPerUnit,
      Orders,
      TotalIn,
      TotalOut,
      TotalProfit,
      TotalMargin,
    });

    const savedUser = await newUser.save();

    //
    res.send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

/* 
router.get("/logOut", async (req, res) => {
  try {
    res
      .cookie("token", "", {
        httpOnly: true,
        sameSite:
          process.env.NODE_ENV === "development"
            ? "lax"
            : process.env.NODE_ENV === "production" && "none",
        secure:
          process.env.NODE_ENV === "development"
            ? false
            : process.env.NODE_ENV === "production" && true,
        expires: new Date(0),
      })
      .send();
  } catch (err) {
    return res.json(null);
  }
});  */

router.get("/gets", async (req, res) => {
  try {
    res.json(await User.find());
  } catch (err) {
    console.log(err);
    return res.json({ _id: "כן... לא........" });
  }
});

router.post("/delete", async (req, res) => {
  try {
    const { index } = req.body;
    const thereare = await User.find();
    const andiwant = await User.findById([index]._id);
    andiwant.delete();
  } catch (err) {
    console.log(err);
    return res.json({ _id: "כן... לא........" });
  }
});

module.exports = router;
