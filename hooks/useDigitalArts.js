import axios from "axios" ;
import useSWR from 'swr' ;
import { useResource } from "./useResousrce";
import { useArtDetail } from "./useArtDetail";
export function useDegitalArt(){
    const url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/digital/"
    const {data,error,mutate} = useSWR([url],getDigitalArts)
    const {createResource} = useResource()
    const {updateArtDetail} =  useArtDetail()
    const tokens = localStorage.getItem('tokens')
    const access = localStorage.getItem('access')

    async function getDigitalArts(){
        try{
            const res = await axios.get(url)
            return res.data
        }
        catch{
            console.log("Error: something went wrong with art")
        }
    }
    ///////////////create resource /////////////
    async function createDigitalArt(info){
        if (!tokens) {
            return;
        }

        try {
            await createResource(info)
            mutate(); //collect the data again
        }
        catch(err){
            console.log("Error with craeting digital")
        }
    }
    ///////////////////////Update resource ////////////
    async function updateDigitalArt(info,id){
        if (!tokens) {
            return;
        }

        try {
            await updateArtDetail(info,id)
            mutate(); //collect the data again
        }
        catch(err){
            console.log("Error with craeting digital")
        }
    }
    
    return{
        digitalArt:data,
        loading :!error && !data ,
        createDigitalArt,
        updateDigitalArt,
    }
}
