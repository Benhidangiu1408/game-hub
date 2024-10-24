import { FetchResponse } from "../services/api-client";
import genres from '../data/genres'
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";

export interface Genres{
    id:number,
    name:string
    image_background:string  
}

const apiClient=new APIClient<Genres>('/genres')

// const useGenres=()=>({data:genres,errors:null,isLoading:false}) //lấy data từ bảng có sẵn
const useGenres=()=>useQuery ({
    queryKey:['genres'],
    queryFn: apiClient.getAll,
    staleTime:ms('24h'),
    initialData:{count:genres.length,results: genres, next:null}
})


export default useGenres