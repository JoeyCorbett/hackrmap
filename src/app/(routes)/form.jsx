import { useState } from 'react';

const Form = () => {
    const [numTeammates, setNumTeammates] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [hackathonLength, setHackathonLength] = useState('');
    const [track, setTrack] = useState('');
    const [sponsorChallenge, setSponsorChallenge] = useState('');
    const [tools, setTools] = useState({
        backend: false,
        frontend: false,
        database: false,
    });
    const [specialRequirements, setSpecialRequirements] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const formData = {
            numTeammates,
            skillLevel,
            hackathonLength,
            track,
            sponsorChallenge,
            tools,
            specialRequirements,
        };
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="numTeammates">Number of Teammates (required):</label>
                <input
                    type="number"
                    id="numTeammates"
                    value={numTeammates}
                    onChange={(e) => setNumTeammates(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="skillLevel">Individual Skill Levels (required):</label>
                <select
                    id="skillLevel"
                    value={skillLevel}
                    onChange={(e) => setSkillLevel(e.target.value)}
                    required
                >
                    <option value="" disabled>Select Skill Level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
            </div>

            <div>
                <label htmlFor="hackathonLength">Hackathon Length (required - hours):</label>
                <input
                    type="number"
                    id="hackathonLength"
                    value={hackathonLength}
                    onChange={(e) => setHackathonLength(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="track">Tracks (required):</label>
                <select
                    id="track"
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
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
                        onChange={(e) => setTrack(e.target.value)}
                    />
                )}
            </div>

            <div>
                <label htmlFor="sponsorChallenge">Sponsor Challenges (optional):</label>
                <select
                    id="sponsorChallenge"
                    value={sponsorChallenge}
                    onChange={(e) => setSponsorChallenge(e.target.value)}
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
                        onChange={(e) => setSponsorChallenge(e.target.value)}
                    />
                )}
            </div>

            <div>
                <label>Preferred Tools/Technologies (optional):</label>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={tools.backend}
                            onChange={(e) => setTools({ ...tools, backend: e.target.checked })}
                        />
                        Backend
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={tools.frontend}
                            onChange={(e) => setTools({ ...tools, frontend: e.target.checked })}
                        />
                        Frontend
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={tools.database}
                            onChange={(e) => setTools({ ...tools, database: e.target.checked })}
                        />
                        Database
                    </label>
                </div>
            </div>

            <div>
                <label htmlFor="specialRequirements">Any Special Requirements? (optional):</label>
                <input
                    type="text"
                    id="specialRequirements"
                    value={specialRequirements}
                    onChange={(e) => setSpecialRequirements(e.target.value)}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;