import { useAuth } from "@/contexts/auth";
import axios from "axios" ;
import useSWR from 'swr' ;
import { useResource } from "./useResousrce";
import { useArtDetail } from "./useArtDetail";
export function useCustomerBids(){
    const url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/digital/"
    const tokens = localStorage.getItem('tokens')
    const access = localStorage.getItem('access')
    const {data,error,mutate} = useSWR([url,tokens],getCustomerBids)
    const {createResource} = useResource()
    const {updateArtDetail} =  useArtDetail()

    async function getCustomerBids(){
        const tok = JSON.parse(access)
        try{
            const res = await axios.get(url,{headers:{Authorization: `Bearer ${tok}`}})
            return res.data
        }
        catch{
            console.log("Error: something went wrong with Customer Bids")
        }
    }
    ///////////////////////Update resource ////////////
    async function updateCustomerBid(info,id){
        if (!tokens) {
            return;
        }

        try {
            await updateArtDetail(info,id)
            mutate(); //collect the data again
        }
        catch(err){
            handleError(err);
        }
    }
    
    return{
        customerBids:data,
        loading :!error && !data ,
        updateCustomerBid,
    }
}
