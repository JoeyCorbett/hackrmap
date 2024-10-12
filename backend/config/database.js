const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Connection URI from the .env file
const mongoURI = process.env.MONGO_URI;

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the application if the connection fails
    }
};

// Export the connection function to be used in other files
module.exports = connectDB;