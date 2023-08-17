import { useAuth } from "@/contexts/auth";
import axios from "axios" ;
import useSWR from 'swr' ;
import { useResource } from "./useResousrce";
import { useArtDetail } from "./useArtDetail";
export function useWonBids(){
    const url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/won-bids/"
    const tokens = localStorage.getItem('tokens')
    const access = localStorage.getItem('access')
    const {data,error,mutate} = useSWR([url,tokens],getWonBids)

    async function getWonBids(){
        const tok = JSON.parse(access)
        try{
            const res = await axios.get(url,{headers:{Authorization: `Bearer ${tok}`}})
            return res.data
        }
        catch{
            console.log("Error: something went wrong wonned bids")
        }
    }
    ///////////////////////Update resource ////////////
    // async function updateCustomerBid(info,id){
    //     if (!tokens) {
    //         return;
    //     }

    //     try {
    //         await updateArtDetail(info,id)
    //         mutate(); //collect the data again
    //     }
    //     catch(err){
    //         handleError(err);
    //     }
    // }
    
    return{
        customerBids:data,
        loading :!error && !data ,
    }
}
