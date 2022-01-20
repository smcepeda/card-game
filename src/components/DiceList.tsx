import React from "react";
import { Player } from "../Model";
import { FaCrown } from "react-icons/fa";

interface Props {
  players: Player[];
  rounds: number;
}

export default function DiceList({ players, rounds }: Props) {
  return (
    <div>
      <div className="card">
        <div className="container">
          <FaCrown /> Nach {rounds} Spielrunden
          <br></br>
          {players.map((i) => i.name + " " + i.score + " ")}
        </div>
      </div>
    </div>
  );
}
