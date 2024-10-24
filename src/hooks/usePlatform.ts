import { useQuery } from "@tanstack/react-query"
import { FetchResponse } from "../services/api-client"
import APIClient from "../services/api-client"

export interface parent_Platform{
    id:number
    name:string
    slug:string
}

const apiClient=new APIClient<parent_Platform>('/platforms/lists/parents')


// const usePlatform= ()=>useData<parent_Platform>('/platforms/lists/parents')
const usePlatform=()=>useQuery({
queryKey: ["platforms"],
queryFn:
    apiClient.getAll,

staleTime:24*60*60*1000
})
export default usePlatform