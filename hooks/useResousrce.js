import axios from "axios" ;
import { useAuth } from "@/contexts/auth" ;
import { useState } from "react" ;
import useSWR from 'swr' ;
export function useResource(){
    const get_art_url=process.env.NEXT_PUBLIC_BASE_URL+"api/v1/arts/"
    const tokens = localStorage.getItem('tokens')
    const access = localStorage.getItem('access')
    const {data,error,mutate} = useSWR([get_art_url],getArtResource)

    async function getArtResource(){
        try{
            const res = await axios.get(get_art_url)
            return res.data
        }
        catch{
            console.log("Error: something went wrong with art")
            handleError(error)
        }
    }
    function handleError(error){
        console.log(error)
    }

    /////////////////////// Create Resource ////////////////
    async function createResource(info){
        if (!tokens) {
            return;
        }
        const tok = JSON.parse(access)
        try {
            await axios.post(get_art_url,info,{headers:{Authorization: `Bearer ${tok}`}})
            mutate();
        }
        catch(err){
            handleError(err);
        }
    }
    ////////////////////Update Resource /////////////////
    async function updateResource(info,id){
        if (!tokens) {
            return;
        }

        try {
            await axios.put(`${get_art_url}${id}/`,info,{headers:{Authorization: `Bearer ${tokens.access}`}})
            mutate();
        }
        catch(err){
            handleError(err);
        }
    }
    return{

        resource : data ,
        loading : !error && !data ,
        createResource,
        updateResource,
    }
}