import axios from "axios" ;
import { useAuth } from "@/contexts/auth" ;
import useSWR from 'swr' ;
import { useResource } from "./useResousrce";
import { useArtDetail } from "./useArtDetail";
export function useInventoryDetail(){
    const url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/inventory/"
    const {tokens} = useAuth()
    const {data,error,mutate} = useSWR([url,tokens],getInventoryElement)

    async function getInventoryElement(id){
        if(!tokens){
            return "no tokens";
        }
        try{
            const res = await axios.get(url+id,{headers:{Authorization: `Bearer ${tokens.access}`}})
            return res.data
        }
        catch{
            console.log("Error: something went wrong with art")
        }
    }
    // /////////////////////// Create Resource ////////////////
    // async function createInventoryElement(info){
    //     if (!tokens) {
    //         return;
    //     }

    //     try {
    //         await axios.post(url,info,{headers:{Authorization: `Bearer ${tokens.access}`}})
    //         mutate();
    //     }
    //     catch(err){
    //         handleError(err);
    //     }
    // }
    ////////////////////Update Resource /////////////////
    async function updateInventoryElement(info,id){
        if (!tokens) {
            return;
        }

        try {
            await axios.put(url+`${id}/`,info,{headers:{Authorization: `Bearer ${tokens.access}`}})
            mutate();
        }
        catch(err){
            handleError(err);
        }
    }

    return{
        inventoryElement:data,
        loading : tokens && !error && !data ,
        updateInventoryElement,
    }
}
