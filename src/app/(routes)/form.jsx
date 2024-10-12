import React, { useState } from 'react';

// Function to submit form data to the backend
const submitForm = async (formData) => {
    const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json(); // Assuming the response contains JSON
};

const MyForm = () => {
    // State variables for form inputs
    const [numTeammates, setNumTeammates] = useState(1);
    const [skillLevels, setSkillLevels] = useState(['']);
    const [hackathonLength, setHackathonLength] = useState(1);
    const [tracks, setTracks] = useState([{ name: '', description: '' }]);
    const [sponsorChallenges, setSponsorChallenges] = useState([{ name: '', description: '' }]);
    const [preferredTools, setPreferredTools] = useState([{ name: '', description: '' }]);
    const [specialRequirements, setSpecialRequirements] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const resetForm = () => {
        // Reset all the form fields to their initial state
        setNumTeammates(1);
        setSkillLevels(['']);
        setHackathonLength(1);
        setTracks([{ name: '', description: '' }]);
        setSponsorChallenges([{ name: '', description: '' }]);
        setPreferredTools([{ name: '', description: '' }]);
        setSpecialRequirements('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validation
        if (!skillLevels.every((level) => level)) {
            setResponseMessage('Please select skill levels for all teammates.');
            setLoading(false);
            return;
        }

        // Create an object with the form data
        const formData = {
            numTeammates,
            skillLevels,
            hackathonLength,
            tracks,
            sponsorChallenges,
            preferredTools,
            specialRequirements,
        };

        try {
            // Call the API function to submit the form data to the Node.js backend
            const response = await submitForm(formData);

            // Handle the response from the backend
            if (response) {
                setResponseMessage('Success! Roadmap generated.'); // Update with success message
                resetForm();
            } else {
                setResponseMessage('Error generating roadmap'); // Update with error message
            }
        } catch (error) {
            setResponseMessage('Error submitting form: ' + error.message); // Handle fetch error
        } finally {
            setLoading(false); // Stop loading state
        }
    };

    return (
      <div className="flex flex-col items-center justify-start bg-gray-100 min-h-screen p-6">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
            {/* Number of Teammates Input */}
            <div className="mb-4">
                <label htmlFor="numTeammates" className="block text-sm font-medium text-gray-700">
                    Number of Teammates (required):
                </label>
                <input
                    type="number"
                    id="numTeammates"
                    value={numTeammates}
                    onChange={(e) => setNumTeammates(Math.max(1, Math.min(8, e.target.value)))}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    min="1"
                    max="8"
                />
            </div>

            {/* Skill Levels Input */}
            {Array.from({ length: numTeammates }).map((_, index) => (
                <div className="mb-4" key={index}>
                    <label htmlFor={`skillLevel-${index}`} className="block text-sm font-medium text-gray-700">
                        Skill Level for Teammate {index + 1} (required):
                    </label>
                    <select
                        id={`skillLevel-${index}`}
                        value={skillLevels[index] || ''}
                        onChange={(e) => {
                            const newSkillLevels = [...skillLevels];
                            newSkillLevels[index] = e.target.value;
                            setSkillLevels(newSkillLevels);
                        }}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        <option value="">Select Skill Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
            ))}

            {/* Hackathon Length Input */}
            <div className="mb-4">
                <label htmlFor="hackathonLength" className="block text-sm font-medium text-gray-700">
                    Hackathon Length (in hours):
                </label>
                <input
                    type="number"
                    id="hackathonLength"
                    value={hackathonLength}
                    onChange={(e) => setHackathonLength(Math.max(1, e.target.value))}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    min="1"
                />
            </div>

            {/* Tracks Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Tracks (optional):</label>
                {tracks.map((track, index) => (
                    <div key={index} className="flex mb-2">
                        <input
                            type="text"
                            placeholder="Track Name"
                            value={track.name}
                            onChange={(e) => {
                                const newTracks = [...tracks];
                                newTracks[index].name = e.target.value;
                                setTracks(newTracks);
                            }}
                            className="mt-1 p-2 block w-1/2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Track Description"
                            value={track.description}
                            onChange={(e) => {
                                const newTracks = [...tracks];
                                newTracks[index].description = e.target.value;
                                setTracks(newTracks);
                            }}
                            className="mt-1 p-2 block w-1/2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ml-2"
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => setTracks([...tracks, { name: '', description: '' }])}
                    className="text-blue-600"
                >
                    Add Track
                </button>
            </div>

            {/* Sponsor Challenges Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Sponsor Challenges (optional):</label>
                {sponsorChallenges.map((challenge, index) => (
                    <div key={index} className="flex mb-2">
                        <input
                            type="text"
                            placeholder="Challenge Name"
                            value={challenge.name}
                            onChange={(e) => {
                                const newChallenges = [...sponsorChallenges];
                                newChallenges[index].name = e.target.value;
                                setSponsorChallenges(newChallenges);
                            }}
                            className="mt-1 p-2 block w-1/2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Challenge Description"
                            value={challenge.description}
                            onChange={(e) => {
                                const newChallenges = [...sponsorChallenges];
                                newChallenges[index].description = e.target.value;
                                setSponsorChallenges(newChallenges);
                            }}
                            className="mt-1 p-2 block w-1/2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ml-2"
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => setSponsorChallenges([...sponsorChallenges, { name: '', description: '' }])}
                    className="text-blue-600"
                >
                    Add Challenge
                </button>
            </div>

            {/* Preferred Tools Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Preferred Tools (optional):</label>
                {preferredTools.map((tool, index) => (
                    <div key={index} className="flex mb-2">
                        <input
                            type="text"
                            placeholder="Tool Name"
                            value={tool.name}
                            onChange={(e) => {
                                const newTools = [...preferredTools];
                                newTools[index].name = e.target.value;
                                setPreferredTools(newTools);
                            }}
                            className="mt-1 p-2 block w-1/2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Tool Description"
                            value={tool.description}
                            onChange={(e) => {
                                const newTools = [...preferredTools];
                                newTools[index].description = e.target.value;
                                setPreferredTools(newTools);
                            }}
                            className="mt-1 p-2 block w-1/2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ml-2"
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => setPreferredTools([...preferredTools, { name: '', description: '' }])}
                    className="text-blue-600"
                >
                    Add Tool
                </button>
            </div>

            {/* Special Requirements Input */}
            <div className="mb-4">
                <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700">
                    Special Requirements (optional):
                </label>
                <textarea
                    id="specialRequirements"
                    value={specialRequirements}
                    onChange={(e) => setSpecialRequirements(e.target.value)}
                    rows="3"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Response Message */}
            {responseMessage && (
                <div className={`mb-4 text-sm ${responseMessage.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                    {responseMessage}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                className={`w-full bg-blue-600 text-white p-2 rounded-md shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
            >
                {loading ? 'Generating...' : 'Generate Roadmap'}
            </button>
        </form>
      </div>
    );
};

export default MyForm;