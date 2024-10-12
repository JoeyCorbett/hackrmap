import { useState, useEffect } from 'react';

const Form = () => {
  const [numTeammates, setNumTeammates] = useState(1);
  const [skillLevels, setSkillLevels] = useState(['']);
  const [hackathonLength, setHackathonLength] = useState('');
  const [tracks, setTracks] = useState([{ name: '', description: '' }]);
  const [sponsorChallenges, setSponsorChallenges] = useState([{ name: '', description: '' }]);
  const [preferredTools, setPreferredTools] = useState([{ name: '', description: '' }]);
  const [specialRequirements, setSpecialRequirements] = useState('');

  useEffect(() => {
    const updatedSkillLevels = [...Array(numTeammates)].map((_, index) => skillLevels[index] || '');
    setSkillLevels(updatedSkillLevels);
  }, [numTeammates]);

  const handleNumberInput = (setValue, min, max) => (e) => {
    const value = Number(e.target.value);
    if (e.target.value === '' || (value >= min && value <= max)) {
      setValue(value);
    }
  };

  const handleSkillLevelChange = (index, value) => {
    const newSkillLevels = [...skillLevels];
    newSkillLevels[index] = value;
    setSkillLevels(newSkillLevels);
  };

  const handleAddTrack = () => {
    setTracks([...tracks, { name: '', description: '' }]);
  };

  const handleTrackChange = (index, field, value) => {
    const newTracks = [...tracks];
    newTracks[index][field] = value;
    setTracks(newTracks);
  };

  const handleRemoveTrack = (index) => {
    const newTracks = tracks.filter((_, i) => i !== index);
    setTracks(newTracks);
  };

  const handleAddSponsorChallenge = () => {
    setSponsorChallenges([...sponsorChallenges, { name: '', description: '' }]);
  };

  const handleSponsorChallengeChange = (index, field, value) => {
    const newChallenges = [...sponsorChallenges];
    newChallenges[index][field] = value;
    setSponsorChallenges(newChallenges);
  };

  const handleRemoveSponsorChallenge = (index) => {
    const newChallenges = sponsorChallenges.filter((_, i) => i !== index);
    setSponsorChallenges(newChallenges);
  };

  const handleAddTool = () => {
    setPreferredTools([...preferredTools, { name: '', description: '' }]);
  };

  const handleToolChange = (index, field, value) => {
    const newTools = [...preferredTools];
    newTools[index][field] = value;
    setPreferredTools(newTools);
  };

  const handleRemoveTool = (index) => {
    const newTools = preferredTools.filter((_, i) => i !== index);
    setPreferredTools(newTools);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
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
      const response = await fetch('https://hackrmap-worker.jcwins8211.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Handle the response from the worker
      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        // You can also display the results or handle them as needed
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Fetch error:', error);
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
            onChange={handleNumberInput(setNumTeammates, 1, 8)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
            min="1"
            max="8"
          />
        </div>

        {/* Individual Skill Levels Input */}
        <div className="mb-4">
          <label htmlFor="skillLevel" className="block text-sm font-medium text-gray-700">
            Individual Skill Levels (required):
          </label>
          {skillLevels.map((level, index) => (
            <select
              key={index}
              value={level}
              onChange={(e) => handleSkillLevelChange(index, e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="" disabled>Select Skill Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          ))}
        </div>

        {/* Hackathon Length Input */}
        <div className="mb-4">
          <label htmlFor="hackathonLength" className="block text-sm font-medium text-gray-700">
            Hackathon Length (required - hours):
          </label>
          <input
            type="number"
            id="hackathonLength"
            value={hackathonLength}
            onChange={handleNumberInput(setHackathonLength, 1, 168)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
            min="1"
            max="168"
          />
        </div>

        {/* Tracks Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Tracks (required):</label>
          {tracks.map((track, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                placeholder="Track Name"
                value={track.name}
                onChange={(e) => handleTrackChange(index, 'name', e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mr-2"
                required
                style={{ height: '40px' }} // Set the fixed height for track name
              />
              <textarea
                placeholder="Track Description"
                value={track.description}
                onChange={(e) => handleTrackChange(index, 'description', e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-y"
                required
                style={{ height: '40px', minHeight: '40px', maxHeight: '300px' }} // Keep the existing min/max heights
              />
              <button
                type="button"
                onClick={() => handleRemoveTrack(index)}
                className="mt-1 bg-red-600 text-white py-1 px-2 rounded-md hover:bg-red-700 mx-2"
                style={{ height: '40px', width: '60px' }}
              >
                -
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddTrack} className="mt-1 mb-2  bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Add Track
          </button>
        </div>

        {/* Sponsor Challenges Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Sponsor Challenges:</label>
          {sponsorChallenges.map((challenge, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                placeholder="Challenge Name"
                value={challenge.name}
                onChange={(e) => handleSponsorChallengeChange(index, 'name', e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mr-2"
                required
                style={{ height: '40px' }}
              />
              <textarea
                placeholder="Challenge Description"
                value={challenge.description}
                onChange={(e) => handleSponsorChallengeChange(index, 'description', e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-y"
                required
                style={{ height: '40px', minHeight: '40px', maxHeight: '300px' }} // Set your preferred min/max heights
              />
              <button
                type="button"
                onClick={() => handleRemoveSponsorChallenge(index)}
                className="mt-1 bg-red-600 text-white py-1 px-2 rounded-md hover:bg-red-700 mx-2"
                style={{ height: '40px', width: '60px' }}
              >
                -
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddSponsorChallenge} className="mt-1 mb-2  bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Add Sponsor Challenge
          </button>
        </div>

        {/* Preferred Tools Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Preferred Tools:</label>
          {preferredTools.map((tool, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                placeholder="Tool Name"
                value={tool.name}
                onChange={(e) => handleToolChange(index, 'name', e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 mr-2"
                required
                style={{ height: '40px' }}
              />
              <textarea
                placeholder="Tool Description"
                value={tool.description}
                onChange={(e) => handleToolChange(index, 'description', e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-y"
                required
                style={{ height: '40px', minHeight: '40px', maxHeight: '300px' }} // Set your preferred min/max heights
              />
              <button
                type="button"
                onClick={() => handleRemoveTool(index)}
                className="mt-1 bg-red-600 text-white py-1 px-2 rounded-md hover:bg-red-700 mx-2"
                style={{ height: '40px', width: '60px' }}
              >
                -
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddTool} className="mt-1 mb-2  bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Add Preferred Tool
          </button>
        </div>

        {/* Special Requirements Input */}
        <div className="mb-4">
          <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700">
            Special Requirements:
          </label>
          <textarea
            id="specialRequirements"
            value={specialRequirements}
            onChange={(e) => setSpecialRequirements(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 resize-y"
            style={{ height: '40px', minHeight: '40px', maxHeight: '300px' }} // Set your preferred min/max heights
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
