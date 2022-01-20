import React, { useEffect, useState } from "react";
import { Player } from "../Model";
import DiceList from "./DiceList";

const DICE_SIDES = ["blue", "yellow", "black", "green", "brown", "red"];
const CARDS_NUMBER = 3;

export default function DiceGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [dice, setDice] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);

  const [players, setPlayers] = useState<Player[]>([
    {
      name: "Carol",
      cards: DICE_SIDES.sort(() => 0.5 - Math.random()).slice(0, CARDS_NUMBER),
      score: 0,
    },
    {
      name: "Alice",
      cards: DICE_SIDES.sort(() => 0.5 - Math.random()).slice(0, CARDS_NUMBER),
      score: 0,
    },
    {
      name: "Bob",
      cards: DICE_SIDES.sort(() => 0.5 - Math.random()).slice(0, CARDS_NUMBER),
      score: 0,
    },
    {
      name: "Mario",
      cards: DICE_SIDES.sort(() => 0.5 - Math.random()).slice(0, CARDS_NUMBER),
      score: 0,
    },
  ]);

  function startGameHandler() {
    setGameStarted(true);
  }

  function pickRandomColor() {
    var randomColor = DICE_SIDES[Math.floor(Math.random() * DICE_SIDES.length)];
    setDice(randomColor);
  }

  function checkScore(players: Player[], dice: string) {
    players.map(function (i, index) {
      if (i.cards.includes(dice)) {
        players[index].score += 1;
        players[index].cards = players[index].cards.filter(
          (item) => item !== dice
        );
        if (players[index].cards.length == 0) {
          setIsEmpty(true);
        }
      }
    });
  }

  function isGameOver(isEmpty: boolean, players: Player[]) {
    if (isEmpty == true) {
      setGameOver(true);
    } else {
      setRounds((prevRounds) => prevRounds + 1);
    }
  }

  useEffect(() => {
    pickRandomColor();
    checkScore(players, dice);
    isGameOver(isEmpty, players);
  }, [rounds]);

  return (
    <div>
      {gameStarted ? (
        <>
          <DiceList players={players} rounds={rounds} />
        </>
      ) : (
        <button onClick={startGameHandler}>Start</button>
      )}
    </div>
  );
}
