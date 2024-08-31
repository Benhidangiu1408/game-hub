import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGame] = useState<Game[]>([]);
  const [errors, setError] = useState("");
  useEffect(() => {
    apiClient
      .get("/games")
      .then((res) => setGame(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {errors && <Text>error</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
