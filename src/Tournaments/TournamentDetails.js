import './TournamentDetails.scss'
import { TournamentService } from '../services/TournamentService';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../User/store';
import UserButtons from '../User/UserButtons';
import TournamentBotList from './TournamentBotList';
import TournamentCountDown from './TournamentCountDown';

function TournamentDetails({isAuthenticated, user, login, logout }) {

    const { tournamentId } = useParams();
    const [tournament, setTournament] = useState(null);
    const [ladder, setLadder] = useState(null);
    
    const Match = ({ match }) => {
        const winnerBot = match.PlayersBots.find(player => player.BotId === match.Winner);
    
        return (
            <div className="match">
                <div className="players">
                    {match.PlayersBots.map(player => (
                        <div key={player.BotId} className={player.BotId === match.Winner ? 'winner' : 'loser'}>
                            {player.UserName}
                        </div>
                    ))}
                </div>
                <div className="result">
                    Winner: {winnerBot ? winnerBot.UserName : 'No winner yet'}
                </div>
            </div>
        );
    };
    useEffect(() => {
        // Create a WebSocket instance
        const socket = new WebSocket(`ws://10.242.93.198:8080/tournamentWs/${tournamentId}`);

        // Event listeners
        socket.addEventListener('open', () => {
            console.log('Connected to WebSocket server');
        });

        socket.addEventListener('message', (event) => {
            console.log('Received message from server:', event.data);
            setLadder(JSON.parse(event.data));
            // Perform actions based on the received data
        });

        socket.addEventListener('close', () => {
            console.log('Disconnected from WebSocket server');
        });

        // Clean up on unmount
        return () => {
            if (socket.readyState === 1) { // <-- This is important
                socket.close();
            }
        }
    }, []);

    useEffect(() => {
        TournamentService.getTournament(tournamentId)
            .then((response) => {
                setTournament(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [tournamentId]);

    return (<>{(!tournament || Object.keys(tournament).length === 0) ? <div>Tournament not found</div> :
        (<>
            <UserButtons/>
            <div className="tournamentWrapper">
                <div className="col1">
                    <div className="tournamentOverview">
                        <div className="tournamentOverviewInfo">
                            <p>Creator: {tournament.creatorName}</p>
                            <p>Player limit: {tournament.playersLimit}</p>
                            <p>Planned on: {tournament.tournamentsDate}</p>
                            <p>Constraints: {tournament.limitations}</p>
                            <p>Status: {tournament.status}</p>
                        </div>
                        {tournament.image &&
                            <div className='tournamentOverviewImage'>
                                <img src={tournament.image} alt="tournament"></img>
                            </div>}
                        <div className="tournamentOverviewDescription">
                            <p>Description: {tournament.description}</p>
                        </div>
                    </div>
                </div>
                <div className="col2">
                    <div className="tournamentTitle">
                        <h1>{tournament.tournamentTitle}</h1>
</div>
                    <TournamentCountDown date={tournament.tournamentsDate} />
                    <TournamentBotList botList={tournament.playersBots} />
                    <div className="ladder">
                    {ladder && ladder.map(match => (
    <Match key={match.matchId} match={match} />
))}
        </div>
                </div>
            </div>
        </>)}
        </>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated,
    user: state.user,
  });
  
const mapDispatchToProps = {login,logout,};

export default connect(mapStateToProps, mapDispatchToProps)(TournamentDetails);
