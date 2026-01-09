import mongoose from "mongoose";
import productModel from "./models/productModel.js";
import connectDB from "./config/mongodb.js";
import "dotenv/config";

await connectDB();

await productModel.deleteMany({});
console.log("🧹 All products deleted");

process.exit();
