// import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   image: { type: Array, required: true },
//   category: { type: String, required: true },
//   subCategory: { type: String, required: true },
//   sizes: { type: Array, required: true },
//   bestseller: { type: Boolean },
//   date: { type: Number, required: true },
// });

// const productModel =
//   mongoose.models.product || mongoose.model("product", productSchema);

// export default productModel;


import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: [String], // Cloudinary image URLs
      required: true,
    },

    category: {
      type: String,
      required: true, // e.g. Organics, Honey, Keychains
    },

    subCategory: {
      type: String, // optional
    },

    brand: {
      type: String, // Katyani Organics, Handmade, etc.
    },

    bestseller: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // replaces "date"
);

const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
