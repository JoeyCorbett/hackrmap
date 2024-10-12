const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from the environment variable
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process if there's an error
  }
};

module.exports = connectDB;