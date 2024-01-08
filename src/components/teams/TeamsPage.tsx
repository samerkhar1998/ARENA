// TeamsPage.tsx

import React, { useState } from 'react';
import './TeamsPage.css';

interface Team {
  id: number;
  name: string;
  game: string;
  members: string[];
  history: string; // Placeholder for team history
}

const TeamsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const teams: Team[] = [
    {
      id: 1,
      name: 'Team Alpha',
      game: 'Call of Duty: Warzone',
      members: ['Player1', 'Player2', 'Player3'],
      history: 'Team Alpha has participated in various tournaments and achieved significant victories.',
    },
    {
      id: 2,
      name: 'Team Bravo',
      game: 'Fortnite',
      members: ['PlayerX', 'PlayerY', 'PlayerZ'],
      history: 'Team Bravo is known for their exceptional skills in Fortnite competitions.',
    },
    // Add more teams as needed
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setSelectedTeam(null); // Clear selected team when searching
  };

  const handleTeamClick = (team: Team) => {
    setSelectedTeam(team);
  };

  return (
    <div>
      <main className="main-content">
        <h1 className="page-title">Featured Teams</h1>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a team..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <section className="teams-section">
          {teams
            .filter((team) => team.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((team) => (
              <div key={team.id} className="team-card" onClick={() => handleTeamClick(team)}>
                <h2 className="team-name">{team.name}</h2>
                <p className="team-game">Game: {team.game}</p>
              </div>
            ))}
        </section>

        {selectedTeam && (
          <div className="team-details">
            <h2 className="team-name">{selectedTeam.name}</h2>
            <p className="team-game">Game: {selectedTeam.game}</p>
            <div className="team-members">
              <p className="members-label">Members:</p>
              <ul>
                {selectedTeam.members.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            </div>
            <p className="team-history">{selectedTeam.history}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default TeamsPage;
