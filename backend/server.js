import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes.js'; // ✅ Correct import

dotenv.config(); // Load environment variables from .env file

const app = express();
const allowedOrigin = process.env.FRONTEND_URL || "*";
app.use(cors({
  origin: allowedOrigin,
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));
app.use(express.json());

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Database connected successfully");
    console.log("📚 Using database:", mongoose.connection.name);
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
};

dbConnection();

// ✅ Correct route mounting
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
