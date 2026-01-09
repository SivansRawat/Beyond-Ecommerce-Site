// import { v2 as cloudinary } from "cloudinary";
// import productModel from "../models/productModel.js";

// // function for add product
// const addProduct = async (req, res) => {
//   try {
//     const {
//       name,
//       description,
//       price,
//       category,
//       subCategory,
//       sizes,
//       bestseller,
//     } = req.body;

//     const image1 = req.files.image1 && req.files.image1[0];
//     const image2 = req.files.image2 && req.files.image2[0];
//     const image3 = req.files.image3 && req.files.image3[0];
//     const image4 = req.files.image4 && req.files.image4[0];

//     const images = [image1, image2, image3, image4].filter(
//       (item) => item !== undefined
//     );

//     let imagesUrl = await Promise.all(
//       images.map(async (item) => {
//         let result = await cloudinary.uploader.upload(item.path, {
//           resource_type: "image",
//         });
//         return result.secure_url;
//       })
//     );

//     const productData = {
//       name,
//       description,
//       category,
//       price: Number(price),
//       subCategory,
//       bestseller: bestseller === "true" ? true : false,
//       sizes: JSON.parse(sizes),
//       image: imagesUrl,
//       date: Date.now(),
//     };

//     console.log(productData);

//     const product = new productModel(productData);
//     await product.save();

//     res.json({ success: true, message: "Product Added" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // function for list product
// const ListProduct = async (req, res) => {
//   try {
//     const products = await productModel.find({});
//     res.json({ success: true, products });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // function for removing product
// const removeProduct = async (req, res) => {
//   try {
//     await productModel.findByIdAndDelete(req.body.id);
//     res.json({ success: true, message: "Product Removed" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // function for single product info
// const singleProduct = async (req, res) => {
//   try {
//     const { productId } = req.body;
//     const product = await productModel.findById(productId);
//     res.json({ success: true, product });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// export { addProduct, ListProduct, removeProduct, singleProduct };



import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

/**
 * ✅ ADD PRODUCT
 */
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      brand,
      bestseller,
    } = req.body;

    // Collect images safely
    const images = [
      req.files?.image1?.[0],
      req.files?.image2?.[0],
      req.files?.image3?.[0],
      req.files?.image4?.[0],
    ].filter(Boolean);

    if (images.length === 0) {
      return res.json({
        success: false,
        message: "At least one product image is required",
      });
    }

    // Upload images to Cloudinary
    const imageUrls = await Promise.all(
      images.map(async (file) => {
        const uploaded = await cloudinary.uploader.upload(file.path, {
          folder: "products",
          resource_type: "image",
        });
        return uploaded.secure_url;
      })
    );

    // Create product
    const product = new productModel({
      name,
      description,
      price: Number(price),
      image: imageUrls,
      category,
      subCategory,
      brand,
      bestseller: bestseller === "true",
    });

    await product.save();

    res.json({
      success: true,
      message: "Product added successfully",
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * ✅ LIST ALL PRODUCTS
 */
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({}).sort({ createdAt: -1 });
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

/**
 * ✅ REMOVE PRODUCT
 */
const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;

    await productModel.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Product removed successfully",
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

/**
 * ✅ SINGLE PRODUCT
 */
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await productModel.findById(productId);

    if (!product) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
