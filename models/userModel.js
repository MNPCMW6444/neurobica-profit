const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    Manufacturing: { type: String, required: true },
    Inspection: { type: String, required: true },
    Packaging: { type: String, required: true },
    Production: { type: String, required: true },
    Freights: { type: String, required: true },
    Landingcost: { type: String, required: true },
    Insert: { type: String, required: true },
    PPC: { type: String, required: true },
    Listing: { type: String, required: true },
    Revenue: { type: String, required: true },
    RefFee: { type: String, required: true },
    FBAFee: { type: String, required: true },
    TotalOutPerUnit: { type: String, required: true },
    OneOrderTimeSAAS: { type: String, required: true },
    TotalSAAS: { type: String, required: true },
    LLC: { type: String, required: true },
    Trademark: { type: String, required: true },
    Photographing: { type: String, required: true },
    Unboxing: { type: String, required: true },
    InsertDesign: { type: String, required: true },
    PackagingDesign: { type: String, required: true },
    Samples: { type: String, required: true },
    TotalOneTime: { type: String, required: true },
    UnitsInOrder: { type: String, required: true },
    TotalOutPerOrder: { type: String, required: true },
    TotalInPerOrder: { type: String, required: true },
    MarginPerUnit: { type: String, required: true },
    Orders: { type: String, required: true },
    TotalIn: { type: String, required: true },
    TotalOut: { type: String, required: true },
    TotalProfit: { type: String, required: true },
    TotalMargin: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
