import mongoose from "mongoose";

async function connect() {
  
  try {
    const connection = process.env.MONGODB_URI;

    if (!connection) {
      throw new Error("MONGODB_URI is not set");
    }

    await mongoose.connect(connection);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
}

export default connect;
