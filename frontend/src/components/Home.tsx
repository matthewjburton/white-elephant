import { useState } from 'react'
import Container from './Container'
import { Header, Text, Title } from './Text'

interface PlayerType {
  name: string
  gift: GiftType | null
}

interface GiftType {
  stolenCounter: number
}

const Home = () => {
  const [players, setPlayers] = useState<PlayerType[]>([])
  const [newPlayer, setNewPlayer] = useState<PlayerType>({
    name: '',
    gift: null,
  })
  const [turn, setTurn] = useState<number>(-1)
  const [maxSteals, setMaxSteals] = useState<number>(1)

  const addPlayer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setPlayers([...players, newPlayer])
    setNewPlayer({ name: '', gift: null })
  }

  const startGame = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5)
    setPlayers(shuffledPlayers)
    setTurn(0)
  }

  const openGift = () => {
    if (turn >= players.length) return

    const newGift: GiftType = {
      stolenCounter: 0,
    }

    const updatedPlayers = players.map((player, index) =>
      index === turn ? { ...player, gift: newGift } : player
    )

    setPlayers(updatedPlayers)
    nextTurn()
  }

  const stealGift = (stealerIndex: number) => {
    const stealablePlayers = players.filter(
      (player) => player.gift && player.gift.stolenCounter < maxSteals
    )

    if (stealablePlayers.length === 0) return

    const updatedPlayers = players.map((player, index) => {
      if (index === turn) {
        if (!stealablePlayers[stealerIndex].gift) return player

        const stolenGift = {
          ...stealablePlayers[stealerIndex].gift,
          stolenCounter: stealablePlayers[stealerIndex].gift.stolenCounter + 1,
        }
        return {
          ...player,
          gift: stolenGift,
        }
      } else if (index === stealerIndex) {
        return {
          ...player,
          gift: null,
        }
      }
      return player
    })

    setPlayers(updatedPlayers)
    setTurn(stealerIndex)
  }

  const nextTurn = () => {
    let nextTurnIndex = (turn + 1) % players.length

    // Loop until we find a player without a gift or we've checked all players
    while (players[nextTurnIndex].gift !== null) {
      nextTurnIndex = (nextTurnIndex + 1) % players.length

      // If we've cycled back to the current turn, break to avoid infinite loop
      if (nextTurnIndex === turn) {
        console.error('No available players without a gift!')
        return
      }
    }

    setTurn(nextTurnIndex)
    console.log(players)
  }

  const allGiftsOpened = players.every((player) => player.gift !== null)

  if (players.length > 0 && allGiftsOpened) {
    return (
      <Container>
        <Title text="Game Over!" />
        <Text text="Enjoy your gifts!" />
      </Container>
    )
  }

  if (turn < 0)
    return (
      <div className="flex flex-col space-y-8">
        <Container>
          <Title text="Players" />
          <form className="flex flex-col space-y-4">
            {players.length === 0 && (
              <Text text="There are currently no players" />
            )}
            {players.length > 0 && <Text text={`${players.length} players`} />}
            {players.map((player, index) => (
              <div key={index} className="">
                {player.name}
              </div>
            ))}
            <div className="flex space-x-4 items-center">
              <Header text="New Player" />
              <input
                type="text"
                className="p-2 border-b-2 border-accent bg-gray-50"
                value={newPlayer.name}
                onChange={(event) => {
                  setNewPlayer({ name: event.target.value, gift: null })
                }}
              />
            </div>
            <button
              className="p-2 px-4 rounded-full bg-accent text-white"
              onClick={(event) => {
                addPlayer(event)
              }}
            >
              Add
            </button>
            {players.length > 0 && (
              <button
                className="p-2 px-4 rounded-full bg-accent text-white"
                onClick={(event) => {
                  startGame(event)
                }}
              >
                Start Game
              </button>
            )}
          </form>
        </Container>
        <Container>
          <Title text="Settings" />
          <form className="flex flex-col space-y-4">
            <div className="flex space-x-4 items-center">
              <Header text="Maximum Steals per Gift" />
              <input
                type="number"
                className="p-2 border-b-2 border-accent bg-gray-50"
                value={maxSteals}
                min={0}
                onChange={(event) => {
                  setMaxSteals(parseInt(event.target.value))
                }}
              />
            </div>
          </form>
        </Container>
      </div>
    )

  return (
    <Container>
      <Title text="Turn Order" />
      <div className="font-bold text-xl">{players[turn].name}&apos;s Turn</div>
      {players.map((player, index) =>
        player.gift &&
        player.gift.stolenCounter < maxSteals &&
        index !== turn ? (
          <div key={index} className="flex space-x-4 items-center">
            <div>{player.name}</div>
            <button
              onClick={() => {
                stealGift(index)
              }}
              className="underline text-accent"
            >
              Steal Gift
            </button>
          </div>
        ) : (
          <div key={index}>{player.name}</div>
        )
      )}
      <div className="flex space-x-4 items-cente w-full">
        <button
          className="w-full p-2 px-4 rounded-full bg-accent text-white"
          onClick={() => {
            openGift()
          }}
        >
          Open new gift
        </button>
      </div>
    </Container>
  )
}

export default Home
