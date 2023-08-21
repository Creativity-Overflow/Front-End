import axios from "axios" ;
import useSWR from 'swr' ;
import { useResource } from "./useResousrce";
import { useArtDetail} from "./useArtDetail";
export function usePhotography(){
    const url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/photos/"
    const {data,error,mutate} = useSWR([url],getPhotography)
    const {createResource} = useResource()
    const tokens = localStorage.getItem('tokens')
    const access = localStorage.getItem('access')
    async function getPhotography(){
        try{
            const res = await axios.get(url)
            return res.data
        }
        catch{
            console.log("Error: something went wrong with art")
        }
    }
    ///////////////create resource /////////////
    async function createPhotography(info){
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
    async function updatePhotography(info,id){
        if (!tokens) {
            return;
        }
        const tok = JSON.parse(access)
        try {
            await axios.put(`${url}${id}`,info,{headers:{Authorization: `Bearer ${tok}`}})
            mutate(); //collect the data again
        }
        catch(err){
            console.log("Error : error in updating photos");
        }
    }
    return{
        resource:data,
        loading :!error && !data ,
        createPhotography,
        updatePhotography,
    }
}
