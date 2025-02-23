import mongoose from "mongoose";

const mongodb = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("Already connected to MongoDB ✅");
      return;
    }

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing in environment variables ❌");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "TradeMaster", // Explicitly define the DB name
    });

    console.log("MongoDB connected successfully ✅");
  } catch (error) {
    console.error("MongoDB connection error ❌:", error);
  }
};

export default mongodb;
