import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

  interface Game {
    id: number;
    name: string;
  }
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }
  
  const useGame = () => {
    const [games, setGame] = useState<Game[]>([]);
    const [errors, setError] = useState("");

    useEffect(() => {
    const controller=new AbortController()
    apiClient
      .get("/games",{signal:controller.signal})
      .then((res) => setGame(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)});

      return ()=>controller.abort();
  }, []);
    return ({games,errors})

  }
  
  export default useGame