import axios from "axios" ;
import useSWR from 'swr' ;
import { useResource } from "./useResousrce";
import { useArtDetail } from "./useArtDetail";
export function usePhysicalArts(){
    const url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/physical/"
    const {data,error,mutate} = useSWR([url],getPhysicalArt)
    const {createResource} = useResource()
    const {updateArtDetail} = useArtDetail()
    const tokens = localStorage.getItem('tokens')

    async function getPhysicalArt(){
        try{
            const res = await axios.get(url)
            return res.data
        }
        catch{
            console.log("Error: something went wrong with art")
        }
    }
    ///////////////create resource /////////////
    async function createPhysicalArt(info){
        if (!tokens) {
            return;
        }

        try {
            await createResource(info)
            mutate(); //collect the data again
        }
        catch(err){
            handleError(err);
        }
    }
    ///////////////////////Update resource ////////////
    async function updatePhysicalArt(info,id){
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
        PhysicalArt :data,
        loading :  !error && !data ,
        createPhysicalArt,
        updatePhysicalArt,
    }
}
