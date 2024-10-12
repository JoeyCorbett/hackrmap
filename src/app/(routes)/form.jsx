import { useState } from 'react';

const Form = () => {
  const [numTeammates, setNumTeammates] = useState(1);
  const [skillLevels, setSkillLevels] = useState(['']);
  const [hackathonLength, setHackathonLength] = useState('');
  const [tracks, setTracks] = useState([{ name: '', description: '' }]);
  const [sponsorChallenges, setSponsorChallenges] = useState([{ name: '', description: '' }]); // State to manage sponsor challenges
  const [tools, setTools] = useState({ backend: false, frontend: false, database: false });
  const [specialRequirements, setSpecialRequirements] = useState('');

  const handleNumTeammatesChange = (e) => {
    const value = Number(e.target.value);
    setNumTeammates(value);

    const newSkillLevels = [...skillLevels];
    while (newSkillLevels.length < value) {
      newSkillLevels.push('');
    }
    while (newSkillLevels.length > value) {
      newSkillLevels.pop();
    }
    setSkillLevels(newSkillLevels);
  };

  const handleSkillLevelChange = (index, value) => {
    const newSkillLevels = [...skillLevels];
    newSkillLevels[index] = value;
    setSkillLevels(newSkillLevels);
  };

  const handleTrackChange = (index, field, value) => {
    const newTracks = [...tracks];
    newTracks[index][field] = value;
    setTracks(newTracks);
  };

  const handleAddTrack = () => {
    setTracks([...tracks, { name: '', description: '' }]);
  };

  const handleSponsorChallengeChange = (index, field, value) => {
    const newChallenges = [...sponsorChallenges];
    newChallenges[index][field] = value;
    setSponsorChallenges(newChallenges);
  };

  const handleAddSponsorChallenge = () => {
    setSponsorChallenges([...sponsorChallenges, { name: '', description: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      numTeammates,
      skillLevels,
      hackathonLength,
      tracks,
      sponsorChallenges,
      tools,
      specialRequirements,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full mx-auto">
        <div className="mb-4">
          <label htmlFor="numTeammates" className="block text-sm font-medium text-gray-700">
            Number of Teammates (required):
          </label>
          <input
            type="number"
            id="numTeammates"
            value={numTeammates}
            onChange={(e) => handleNumTeammatesChange(e)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
            min="1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Individual Skill Levels (required):
          </label>
          {Array.from({ length: numTeammates }, (_, index) => (
            <select
              key={index}
              value={skillLevels[index]}
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

        <div className="mb-4">
          <label htmlFor="hackathonLength" className="block text-sm font-medium text-gray-700">
            Hackathon Length (required - hours):
          </label>
          <input
            type="number"
            id="hackathonLength"
            value={hackathonLength}
            onChange={(e) => setHackathonLength(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
            min="1"
          />
        </div>

        {/* Track Input Fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Tracks (required):
          </label>
          {tracks.map((track, index) => (
            <div key={index} className="space-y-2 mt-2">
              <input
                type="text"
                value={track.name}
                onChange={(e) => handleTrackChange(index, 'name', e.target.value)}
                placeholder={`Track Name ${index + 1}`}
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
              />
              <textarea
                value={track.description}
                onChange={(e) => handleTrackChange(index, 'description', e.target.value)}
                placeholder={`Track Description ${index + 1}`}
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTrack}
            className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Add Track
          </button>
        </div>

        {/* Sponsor Challenges Input Fields */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Sponsor Challenges (optional):
          </label>
          {sponsorChallenges.map((challenge, index) => (
            <div key={index} className="space-y-2 mt-2">
              <input
                type="text"
                value={challenge.name}
                onChange={(e) => handleSponsorChallengeChange(index, 'name', e.target.value)}
                placeholder={`Challenge Name ${index + 1}`}
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
              />
              <textarea
                value={challenge.description}
                onChange={(e) => handleSponsorChallengeChange(index, 'description', e.target.value)}
                placeholder={`Challenge Description ${index + 1}`}
                className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddSponsorChallenge}
            className="mt-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Add Sponsor Challenge
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Preferred Tools/Technologies (optional):</label>
          <div className="mt-2 space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={tools.backend}
                onChange={(e) => setTools({ ...tools, backend: e.target.checked })}
                className="mr-2"
              />
              Backend
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={tools.frontend}
                onChange={(e) => setTools({ ...tools, frontend: e.target.checked })}
                className="mr-2"
              />
              Frontend
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={tools.database}
                onChange={(e) => setTools({ ...tools, database: e.target.checked })}
                className="mr-2"
              />
              Database
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700">
            Any Special Requirements? (optional):
          </label>
          <input
            type="text"
            id="specialRequirements"
            value={specialRequirements}
            onChange={(e) => setSpecialRequirements(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
