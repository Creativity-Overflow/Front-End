import axios from "axios" ;
import useSWR from 'swr' ;
import { useAuth } from "@/contexts/auth";
export function useArtDetail(){
    const url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/"
    const tokens = localStorage.getItem('tokens')
    const access = localStorage.getItem('access')
    const {data,error,mutate} = useSWR([url],getArtDetail)

    async function getArtDetail(id){
        try{
            const res = await axios.get(url+`${id}/`)
            return res.data
        }
        catch{
            console.log("Error: something went wrong with art")
        }
    }
    /////////////update art detail
    async function updateArtDetail(info,id){
        if (!tokens) {
            return;
        }
        const tok = JSON.parse(access)
        try {
            await axios.put(url+`${id}/` ,info, {headers:{Authorization: `Bearer ${tok}`}} )
            mutate(); //collect the data again
        }
        catch(err){
            console.log("Error: something went wrong with updateArtDetail")
        }
    }
    return{
        resource:data,
        loading :!error && !data ,
        getArtDetail,
        updateArtDetail,
    }
}
