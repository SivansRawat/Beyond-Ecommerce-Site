// import mongoose from "mongoose";
// import { v2 as cloudinary } from "cloudinary";
// import productModel from "./models/productModel.js";
// import connectDB from "./config/mongodb.js";
// import "dotenv/config";
// import path from "path";
// import fs from "fs";

// // cloudinary config
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET_KEY,
// });

// // connect db
// await connectDB();

// // path to frontend assets
// const assetsPath = path.resolve("../frontend/src/assets");

// const uploadImage = async (file) => {
//   const result = await cloudinary.uploader.upload(file, {
//     folder: "products",
//   });
//   return result.secure_url;
// };

// const seed = async () => {
//   const products = (await import("../frontend/src/assets/assets.js")).products;

//   for (const product of products) {
//     const imageUrls = [];

//     for (const img of product.image) {
//       const imgPath = path.join(assetsPath, path.basename(img));
//       imageUrls.push(await uploadImage(imgPath));
//     }

//     await productModel.create({
//       name: product.name,
//       description: product.description,
//       price: product.price,
//       category: product.category,
//       subCategory: product.subCategory,
//       sizes: product.sizes,
//       bestseller: product.bestseller,
//       image: imageUrls,
//       date: Date.now(),
//     });

//     console.log("Added:", product.name);
//   }

//   console.log("✅ All products uploaded");
//   process.exit();
// };

// seed();



import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import productModel from "./models/productModel.js";
import connectDB from "./config/mongodb.js";
import { products } from "./products.seed.js";
import "dotenv/config";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

await connectDB();

const assetsDir = path.resolve("../frontend/src/assets");

for (const product of products) {
  const imageUrls = [];

  for (const img of product.images) {
    const imgPath = path.join(assetsDir, img);

    const uploaded = await cloudinary.uploader.upload(imgPath, {
      folder: "products",
    });

    imageUrls.push(uploaded.secure_url);
  }

  await productModel.create({
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    subCategory: product.subCategory,
    sizes: product.sizes,
    bestseller: product.bestseller,
    image: imageUrls,
    date: Date.now(),
  });

  console.log("✅ Added:", product.name);
}

console.log("🎉 ALL PRODUCTS SEEDED");
process.exit();
