import axios from "axios" ;
import useSWR from 'swr' ;
// import { useResource } from "./useResousrce";
// import { useArtDetail } from "./useArtDetail";
export function useMoveRow(){
    // const getUrl = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/"
    const updateUrl = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/move_row/"
    const {data,error,mutate} = useSWR([updateUrl],updateState)

    // async function getRow(id){
    //     try{
    //         const res = await axios.get(`${getUrl}${id}/`)
    //         return res.data
    //     }
    //     catch{
    //         console.log("Error: something went wrong with art")
    //     }
    // }
    ///////////////create resource /////////////
    function updateState(id){
        try {
            axios.post(updateUrl+`${id}/`)
            .then((response)=>response.data)
        }
        catch(err){
            handleError(err);
        }
    }
   
    return{
        updateRow :data,
        loading :  !error && !data ,
        updateState,
    }
}
