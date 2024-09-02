import useData from "./useData";
import genres from '../data/genres'

export interface Genres{
    id:number,
    name:string
    image_background:string  
}


const useGenres=()=>({data:genres,errors:null,isLoading:false})

export default useGenres