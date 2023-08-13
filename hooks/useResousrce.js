import axios from "axios" ;
import { useAuth } from "@/contexts/auth" ;
import { useState } from "react" ;
import useSWR from 'swr' ;

export function useResource(){
    const get_art_url=process.env.NEXT_PUBLIC_BASE_URL+"api/v1/arts/"
    const get_inventory_url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/inventory/"
    const get_artist_art_url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/artist-art/"
    const {tokens,logout} = useAuth()
    const {data,error} = useSWR([get_art_url , tokens],getArtResource)
    const {inven,invenError} = useSWR([get_inventory_url,tokens],getInventory)
    const {artistArt,artistArtError} = useSWR([get_artist_art_url,tokens],getArtistArt)
    const [art , setArt] = useState([])
    const [inventory , setInventory] = useState([])
    const [ArtistArt , setArtistArt] = useState([])

    function getArtResource(){
        if(!tokens){
            return "no tokens";
        }
        try{
            axios.get(get_art_url,{headers:{Authorization: `Bearer ${tokens.access}`}})
            .then(response =>{
                console.log(response.data)
                setArt(response.data)
                
            }).catch(error=>handleError(error))
        }
        catch{
            console.log("Error: something went wrong")
        }
        // return data
    }
    function handleError(error){
        logout()
        console.log(error)
    }

    function getInventory(){
        if(!tokens){
            return "no tokens";
        }
        try{
            axios.get(get_inventory_url,{headers:{Authorization: `Bearer ${tokens.access}`}})
            .then(response =>{
                // console.log(response)
                setInventory(response.data)
            
            }).catch(error=>handleError(error))
        }
        catch{
            console.log("Error: something went wrong")
        }
    }
    function getArtistArt(){
        if(!tokens){
            return "no tokens";
        }
        try{
            axios.get(get_artist_art_url,{headers:{Authorization: `Bearer ${tokens.access}`}})
            .then(response =>{
                // console.log(response)
                setArtistArt(response.data)
            
            }).catch(error=>handleError(error))
        }
        catch{
            console.log("Error: something went wrong")
        }
    }
    return{

        getArts : art ,
        loading : tokens && !error && !data ,
        getInvontry: inventory,
        getArtsArtist: ArtistArt,
    }
}