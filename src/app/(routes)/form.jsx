import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const MyForm = () => {
    // State variables for form inputs
    const [numTeammates, setNumTeammates] = useState(1);
    const [skillLevels, setSkillLevels] = useState(['']);
    const [hackathonLength, setHackathonLength] = useState(1);
    const [tracks, setTracks] = useState([{ name: '', description: '' }]);
    const [sponsorChallenges, setSponsorChallenges] = useState([{ name: '', description: '' }]);
    const [preferredTools, setPreferredTools] = useState([{ name: '', description: '' }]);
    const [projectGoals, setprojectGoals] = useState('');
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const navigate = useNavigate();

    const handleRemove = (index, setState, state) => {
        const newState = state.filter((_, i) => i !== index);
        setState(newState);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default behavior
        if (loading) return; // Prevent multiple submissions

        setLoading(true); // Set loading state to true
        setResponseMessage(''); // Clear any previous response messages

        // Validation
        if (!skillLevels.every((level) => level)) {
            setResponseMessage('Please select skill levels for all teammates.');
            setLoading(false);
            return;
        }

        // Create an object with the form data
        const formData = {
            projectGoals,
            numTeammates,
            skillLevels,
            hackathonLength,
            tracks,
            sponsorChallenges,
            preferredTools,
        };

        try {
            // Save the form data to localStorage for use in the loading page
            localStorage.setItem('formData', JSON.stringify(formData));
            console.log("*******", JSON.stringify(formData));

            // Send the form data to your backend API to save in MongoDB
            const response = await fetch('http://localhost:3001/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form to the server');
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);

            // Redirect to loading page
            navigate('/loading');
        } catch (error) {
            console.error('Error submitting the form:', error);
            setResponseMessage('Error submitting the form. Please try again later.');
        } finally {
            setLoading(false); // Stop loading after submission is done
        }
    };

    return (
        <div className="flex flex-col items-center justify-start bg-gray-900 min-h-screen p-6 text-base">
            {/* Header */}
            <div className="text-center text-white mb-6">
                <h1 className="text-3xl font-bold">Roadmap Generator</h1>
                <p className="text-lg text-gray-400">Fill out this form to generate a tailored roadmap for your hackathon project.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#1e273b] p-6 rounded-lg shadow-md max-w-lg w-full">
             {/* Project Goals Input */}
             <div className="mb-4">
                <label htmlFor="projectGoals" className="block text-sm font-medium text-[#b3c0e3]">
                    Project Goals (required):
                </label>
                <textarea
                    id="projectGoals"
                    value={projectGoals}
                    onChange={(e) => setprojectGoals(e.target.value)}
                    rows="3"
                    required
                    className="mt-1 p-2 block w-full border bg-gray-900 border-black text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="E.g., Build a mobile app for social good or develop a tool to improve team collaboration. Outline what you aim to achieve during the hackathon."
                />
            </div>
            {/* Number of Teammates Input */}
            <div className="mb-4">
                <label htmlFor="numTeammates" className="block text-sm font-medium text-[#b3c0e3]">
                    Number of Teammates (required):
                </label>
                <input
                    type="number"
                    id="numTeammates"
                    value={numTeammates}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value === '') {
                            setNumTeammates(value); // Permite que el input esté vacío
                        } else {
                            const numValue = Math.max(1, Math.min(8, Number(value))); // Aplica las restricciones si no está vacío
                            setNumTeammates(numValue);
                        }
                    }}
                    className="mt-1 p-2 block w-full border bg-gray-900 border-black text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                    min="1"
                    max="8"
                />
            </div>

            {/* Skill Levels Input */}
            {Array.from({ length: numTeammates }).map((_, index) => (
                <div className="mb-4" key={index}>
                    <label htmlFor={`skillLevel-${index}`} className="block text-sm font-medium text-[#b3c0e3]">
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
                        className="mt-1 p-2 block w-full border bg-gray-900 border-black text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                <label htmlFor="hackathonLength" className="block text-sm font-medium text-[#b3c0e3]">
                    Hackathon Length (in hours):
                </label>
                <input
                type="number"
                id="hackathonLength"
                value={hackathonLength}
                onChange={(e) => {
                    const value = e.target.value;
                    if (value === '') {
                        setHackathonLength(value); // Permite que el input esté vacío
                    } else {
                        const numValue = Math.max(1, Math.min(168, Number(value))); // Aplica las restricciones si no está vacío
                        setHackathonLength(numValue);
                    }
                }}
                className="mt-1 p-2 block w-full border bg-gray-900 border-black text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
                min="1"
                max="168"
                />
            </div>

            {/* Tracks Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-[#b3c0e3]">Tracks (optional):</label>
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
                            className="mt-1 p-2 block w-full border bg-gray-900 border-black text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                            className="mt-1 p-2 block w-full border bg-gray-900 border-black text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ml-2"
                        />
                        <button
                            type="button"
                            onClick={() => handleRemove(index, setTracks, tracks)}
                            className="text-gray-200 border border-black rounded-md p-1 bg-red-600 ml-2 mt-1"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => setTracks([...tracks, { name: '', description: '' }])}
                    className="text-gray-200 border border-black rounded-md p-1 bg-[#3262ca]"
                >
                    Add Track
                </button>
            </div>

            {/* Sponsor Challenges Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-[#b3c0e3]">Sponsor Challenges (optional):</label>
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
                            className="mt-1 p-2 block w-full border bg-gray-900 border-black text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                            className="mt-1 p-2 block w-full border bg-gray-900 border-black text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ml-2"
                        />
                        <button
                            type="button"
                            onClick={() => handleRemove(index, setSponsorChallenges, sponsorChallenges)}
                            className="text-gray-200 border border-black rounded-md p-1 bg-red-600 ml-2 mt-1"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => setSponsorChallenges([...sponsorChallenges, { name: '', description: '' }])}
                    className="text-gray-200 border border-black rounded-md p-1 bg-[#3262ca]"
                >
                    Add Challenge
                </button>
            </div>

            {/* Preferred Tools Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-[#b3c0e3]">Preferred Tools (optional):</label>
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
                            className="mt-1 p-2 block w-full border bg-gray-900 border-black text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                            className="mt-1 p-2 block w-full border bg-gray-900 border-black text-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ml-2"
                        />
                        <button
                            type="button"
                            onClick={() => handleRemove(index, setPreferredTools, preferredTools)}
                            className="text-gray-200 border border-black rounded-md p-1 bg-red-600 ml-2 mt-1"
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() => setPreferredTools([...preferredTools, { name: '', description: '' }])}
                    className="text-gray-200 border border-black rounded-md p-1 bg-[#3262ca]"
                >
                    Add Tool
                </button>
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
                className={`w-full bg-[#4b8748] text-white p-2 rounded-md shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''} hover:bg-[#3a6b38]`}
                disabled={loading}
            >
                {loading ? 'Generating...' : 'Generate Roadmap'}
            </button>
        </form>
      </div>
    );
};

export default MyForm;
