import useData from "./useData"

export interface parent_Platform{
    id:number
    name:string
    slug:string
}

const usePlatform= ()=>useData<parent_Platform>('/platforms/lists/parents')
export default usePlatform