import { useQuery } from "@tanstack/react-query";
import  Screenshot  from "../entities/screenshot";
import APIClient from "../services/api-client";

const useScreenshots=(gameId:number)=>{
    const apiCLient=new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

    return useQuery({
        queryKey:['screenshots', gameId],
        queryFn:apiCLient.getAll
    })
}

export default useScreenshots;