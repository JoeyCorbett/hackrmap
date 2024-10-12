import { useState } from 'react';

const Form = () => {
  const [numTeammates, setNumTeammates] = useState(1);
  const [skillLevels, setSkillLevels] = useState(['']);
  const [hackathonLength, setHackathonLength] = useState('');
  const [track, setTrack] = useState('');
  const [sponsorChallenge, setSponsorChallenge] = useState('');
  const [tools, setTools] = useState({ backend: false, frontend: false, database: false });
  const [specialRequirements, setSpecialRequirements] = useState('');

  const handleNumTeammatesChange = (e) => {
    const value = Number(e.target.value);
    setNumTeammates(value);

    // Update skill levels array based on the number of teammates
    const newSkillLevels = [...skillLevels];
    while (newSkillLevels.length < value) {
      newSkillLevels.push(''); // Add empty skill levels for new teammates
    }
    while (newSkillLevels.length > value) {
      newSkillLevels.pop(); // Remove skill levels for teammates that are no longer needed
    }
    setSkillLevels(newSkillLevels);
  };

  const handleSkillLevelChange = (index, value) => {
    const newSkillLevels = [...skillLevels];
    newSkillLevels[index] = value; // Update skill level for specific teammate
    setSkillLevels(newSkillLevels);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      numTeammates,
      skillLevels,
      hackathonLength,
      track,
      sponsorChallenge,
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
            min="1" // Ensures that only non-negative numbers can be entered
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
          />
        </div>

        <div className="mb-4">
          <label htmlFor="track" className="block text-sm font-medium text-gray-700">
            Tracks (required):
          </label>
          <select
            id="track"
            value={track}
            onChange={(e) => setTrack(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="" disabled>Select Track</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile Development</option>
            <option value="data">Data Science</option>
            <option value="other">Other</option>
          </select>
          {track === 'other' && (
            <input
              type="text"
              placeholder="Specify other track"
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setTrack(e.target.value)}
            />
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="sponsorChallenge" className="block text-sm font-medium text-gray-700">
            Sponsor Challenges (optional):
          </label>
          <select
            id="sponsorChallenge"
            value={sponsorChallenge}
            onChange={(e) => setSponsorChallenge(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled>Select Challenge</option>
            <option value="challenge1">Challenge 1</option>
            <option value="challenge2">Challenge 2</option>
            <option value="other">Other</option>
          </select>
          {sponsorChallenge === 'other' && (
            <input
              type="text"
              placeholder="Specify other challenge"
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setSponsorChallenge(e.target.value)}
            />
          )}
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
