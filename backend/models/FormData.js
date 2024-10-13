// /backend/models/FormData.js
const mongoose = require('mongoose');

// Define the schema for form data
const formDataSchema = new mongoose.Schema({
    projectGoals: { type: String },
    numTeammates: { type: Number, required: true },
    skillLevels: { type: [String], required: true },
    hackathonLength: { type: Number, required: true },
    tracks: [
        {
            name: { type: String },
            description: { type: String },
        },
    ],
    sponsorChallenges: [
        {
            name: { type: String },
            description: { type: String },
        },
    ],
    preferredTools: [
        {
            name: { type: String },
            description: { type: String },
        },
    ],
}, { timestamps: true });  // Add timestamps to track creation and updates

// Check if the model already exists, to prevent re-compilation errors
const FormData = mongoose.models.FormData || mongoose.model('FormData', formDataSchema);

module.exports = FormData;