import axios from "axios" ;
import { headers } from "next/dist/client/components/headers" ;
import { useAuth } from "@/contexts/auth" ;
import { useState } from "react" ;
import useSWR from 'swr' ;
import physicalArts from "@/components/physicalArts";

export function useResource(){
    const get_photography_url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/photos/"
    const get_digital_art_url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/digital/"
    const get_art_url=process.env.NEXT_PUBLIC_BASE_URL+"api/v1/arts/"
    const get_inventory_url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/inventory/"
    const get_physical_arts_url = process.env.NEXT_PUBLIC_BASE_URL+"api/v1/arts/physical/"
    const get_digital_arts_url = process.env.NEXT_PUBLIC_BASE_URL+"api/v1/arts/digital/"
    const get_photos_url = process.env.NEXT_PUBLIC_BASE_URL+"api/v1/arts/photos/"
    const {tokens,logout} = useAuth()
    const {data,error} = useSWR([get_art_url],getArtResource)
    const {inven,invenError} = useSWR([get_inventory_url,tokens],getInventory)
    const {physical,physError}= useSWR([get_physical_arts_url],getPhysical)
    const {photography,photError}= useSWR([get_photography_url],getPhotography)
    const {digitalArt,digiError}= useSWR([get_digital_art_url],getDigitalArt)
    const [art , setArt] = useState([])
    const [inventory , setInventory] = useState([])
    const [physArt , setPhysArt] = useState([])
    const [photos , setPhotos] = useState([])
    const [digital , setDigital] = useState([])

    function getArtResource(){
        // if(!tokens){
        //     return "no tokens";
        // }
        try{
            axios.get(get_art_url)
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
    /////////////////////physical arts////////////////////
    function getPhysical(){
        axios.get(get_physical_arts_url)
        .then((response)=>{
            console.log(response.data)
            setPhysArt(response.data)
        })
        .catch((error)=>{
            handleError(error)
        })
    }
    /////////////////////////photography fetch//////////////////
    function getPhotography(){
        axios.get(get_photography_url)
        .then((response)=>{
            console.log(response.data)
            setPhotos(response.data)
        })
        .catch((error)=>{
            handleError(error)
        })
    }
    //////////////////////// digital fetch ///////////////////
    function getDigitalArt(){
        axios.get(get_digital_art_url)
        .then((response)=>{
            console.log(response.data)
            setDigital(response.data)
        })
        .catch((error)=>{
            handleError(error)
        })
    }
    ///////////////////////////////////////////////////////////
    return{

        getArts : art ,
        loading : tokens && !error && !data ,
        getInvontry: inventory,
        physicalArts : physArt,
        phyloading: physArt && !physError,
        digitalArt : digital,
        photography: photos,
    }
}
