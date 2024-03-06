import { useState } from "react"

interface IUser {
    name: string,
    company: string,
    instructor: boolean
}

interface IGames {
    name: string
}

const Games = () => {
    const [user, setUser] = useState<IUser>({
        name: 'Christian',
        company: '',
        instructor: false
    })

    const [games, setGames] = useState(['Fallen Survivor', 'League of Legends', 'Pokemon', 'Monopoly'])

    return (
        <>
            {user.name}
            <ul>
                {games.map(game => <li key={game}>{game}</li>)}
            </ul>
            <button onClick={() => setGames(curr => [...curr, 'mw2'])}>Add Game</button>
            <button onClick={()=> setGames(games.filter((game) => game !== 'Pokemon'))}>Remove Game</button>
            <button onClick={()=> setGames(games.map((game) => game === 'League of Legends' ? 'LoL' : game))}>Update Game</button>
        </>
    )
}

export default Games