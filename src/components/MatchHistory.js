import { useEffect, useState } from "react";
import axios from "axios";

export default function MatchHistory({puuid})
{
    const [matchIds, setMatchIds] = useState([]);
    const [matchHistory, setMatchHistory] = useState([]);
    const apiKey = "RGAPI-ae79901a-1aa8-4726-a6ff-ffff3edf3996"

    useEffect(() => {
        const getMatchIds = () => {
            axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${apiKey}`)
                .then((response) => {
                    setMatchIds(response.data);
                    matchIds.forEach((matchId, index) => {
                        setTimeout(() => {
                            axios.get(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`)
                                .then((response) => {
                                    setMatchHistory((matchHistory) => [...matchHistory, response.data]);
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        }, index * 2000);
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        
        getMatchIds();
    });

    console.log(matchHistory);

    const matchHistoryList = matchHistory.map((match) => {
        return (
            <div key={match.id}>
                <h1>{match.id}</h1>
            </div>
        )
    });

    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="text-4xl">Historique des 20 dernières parties</h1>
            {matchHistoryList}
        </div>
    )
}
