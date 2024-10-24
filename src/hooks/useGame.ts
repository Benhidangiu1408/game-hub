import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entity/Game";

export interface Platform{
    id:number,
    name:string,
    slug: string
}

const apiClient=new APIClient<Game>('/games')
 
  // const useGame = (gameQuery: GameQuery) => useData<Game>('/games',{params:{genres:gameQuery.genre?.id, platforms:gameQuery.platform?.id,ordering:gameQuery.sortOrder,search:gameQuery.searchText}},[gameQuery])
  const useGame = () =>{
    const gameQuery=useGameQueryStore(s=>s.gameQuery)
    return useInfiniteQuery<FetchResponse<Game>,Error>({
      queryKey:['games', gameQuery],
      queryFn:({pageParam=1})=> apiClient.getAll({ 
        params:{
          genres:gameQuery.genreId,
          platforms:gameQuery.platformId,
          ordering:gameQuery.sortOrder,
          search:gameQuery.searchText,
          page:pageParam
        }
      }),
      staleTime:24*60*60*1000,//24h,
      getNextPageParam:(lastPage, allPages)=>{
        return lastPage.next ? allPages.length +1 : undefined
      }
    })
  }
    
  export default useGame