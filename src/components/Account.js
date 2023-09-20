import { useEffect, useState } from "react";
import axios from "axios";
import MatchHistory from "./MatchHistory";

export default function Account({name}) {
    const [account, setAccount] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiKey = "RGAPI-933adece-458b-429a-8d54-8bbb74a3329a"

    useEffect(() => {
        const getAccount = () => {
            axios.get(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`)
                .then((response) => {
                    setAccount(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        getAccount();
    }, [name]);

    if (loading) return <h1>Chargement...</h1>;

    return (
        <div className="flex flex-col justify-center items-center gap-3">
            <img src={`http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/${account.profileIconId}.png`}
                 alt={account.profileIconId}/>
                <h1 className="text-4xl">{account.name}</h1>
                <h2 className="text-3xl">Niveau: {account.summonerLevel}</h2>
            <MatchHistory puuid={account.puuid}/>
        </div>
    )
}
