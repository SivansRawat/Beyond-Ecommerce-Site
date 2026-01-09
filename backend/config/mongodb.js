// import mongoose from "mongoose";

// const connectDB = async () => {
//   mongoose.connection.on("connected", () => {
//     console.log("DB Connected");
//   });

//   await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
// };

// export default connectDB;



import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB Connected");
    });

    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
