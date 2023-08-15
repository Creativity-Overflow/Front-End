import axios from "axios" ;
import { useAuth } from "@/contexts/auth" ;
import { useState } from "react" ;
import useSWR from 'swr' ;
export function useResource(){
    const get_photography_url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/photos/"
    const get_digital_art_url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/digital/"
    const get_physical_arts_url = process.env.NEXT_PUBLIC_BASE_URL+"api/v1/arts/physical/"
    const get_art_url=process.env.NEXT_PUBLIC_BASE_URL+"api/v1/arts/"
    const update_price_url=process.env.NEXT_PUBLIC_BASE_URL+"api/v1/arts/"
    const get_inventory_url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/inventory/"

    const post_artist_art_url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/"

    const get_artist_art_url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/artist-art/"
    const get_sold_art_url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/sold-artist-art/"
    const get_customer_bid_url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/customer-bidds/"
    const get_win_bid_url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/won-bids/"

    const {tokens,logout} = useAuth()
    const {data,error} = useSWR([get_art_url],getArtResource)
    const {inven,invenError} = useSWR([get_inventory_url,tokens],getInventory)
    const {physical,physError}= useSWR([get_physical_arts_url],getPhysical)
    const {photography,photError}= useSWR([get_photography_url],getPhotography)
    const {digitalArt,digiError}= useSWR([get_digital_art_url],getDigitalArt)
    const {updatepricee,updteError}= useSWR([update_price_url],updatePrice)


    const {artistArt,artistArtError} = useSWR([get_artist_art_url,tokens],getArtistArt)
    // get the art sold for the artist
    const {sold,soldError} = useSWR([get_sold_art_url,tokens],getsoldArtistArt)
    // get the art hows bidded for the artist
    const {bid,bidError} = useSWR([get_customer_bid_url,tokens],getCusomerbid)
    // won bidds for artist 
    const {won,wonError} = useSWR([get_win_bid_url,tokens],getWonBid)
    const {addart,addartError} = useSWR([post_artist_art_url ,tokens],AddArt)
    const [art , setArt] = useState([])
    const [inventory , setInventory] = useState([])
    const [physArt , setPhysArt] = useState([])
    const [photos , setPhotos] = useState([])
    const [digital , setDigital] = useState([])

    // const [updateprice , setUpdateprice] = useState([])

    // const {artistArt,artistArtError} = useSWR([get_artist_art_url,tokens],getArtistArt)
    const [ArtistArt , setArtistArt] = useState([])
    const [soldArtistArt , setsoldArtistArt] = useState([])
    const [customerBid , setcustomerBid] = useState([])
    const [winnerbid , setwinnerbid] = useState([])
    const [AddArts , setAddArts] = useState([])

    async function getArtResource(){
        if(!tokens){
            return "no tokens";
        }
        try{

            const res = await axios.get(get_art_url)
            return res.data
            // axios.get(get_art_url)
            // .then(response =>{
            //     setArt(response.data)
            //     return response.data
                
            // }).catch(error=>handleError(error))
        }
        catch{
            console.log("Error: something went wrong")
        }
        // return data
    }
    function handleError(error){
        console.log(error)
    }

    function getInventory(){
        if(!tokens){
            return "no tokens";
        }
        try{
            axios.get(get_inventory_url,{headers:{Authorization: `Bearer ${tokens.access}`}})
            .then(response =>{
                setInventory(response.data)
            
            }).catch(error=>handleError(error))
        }
        catch{
            console.log("Error: something went wrong")
        }
    }

    /////////////////////physical arts////////////////////
    async function getPhysical(){
        if(!tokens){
            return "no tokens";
        }
        try{

            const res = await axios.get(get_physical_arts_url)
            return res.data
            // axios.get(get_art_url)
            // .then(response =>{
            //     setArt(response.data)
            //     return response.data
                
            // }).catch(error=>handleError(error))
        }
        catch{
            console.log("Error: something went wrong")
        }
    }
    /////////////////////////photography fetch//////////////////
    async function getPhotography(){
        if(!tokens){
            return "no tokens";
        }
        try{

            const res = await axios.get(get_photography_url)
            return res.data
            // axios.get(get_art_url)
            // .then(response =>{
            //     setArt(response.data)
            //     return response.data
                
            // }).catch(error=>handleError(error))
        }
        catch{
            console.log("Error: something went wrong")
        }
    }
    //////////////////////// digital fetch ///////////////////
    async function getDigitalArt(){
        if(!tokens){
            return "no tokens";
        }
        try{

            const res = await axios.get(get_digital_art_url)
            return res.data
            // axios.get(get_art_url)
            // .then(response =>{
            //     setArt(response.data)
            //     return response.data
                
            // }).catch(error=>handleError(error))
        }
        catch{
            console.log("Error: something went wrong")
        }
        // return data
    }
    ///////////////////////////////////////////////////////////

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

    function getsoldArtistArt(){
        if(!tokens){
            return "no tokens";
        }
        try{
            axios.get(get_sold_art_url,{headers:{Authorization: `Bearer ${tokens.access}`}})
            .then(response =>{
                // console.log(response)
                setsoldArtistArt(response.data)
            
            }).catch(error=>handleError(error))
        }
        catch{
            console.log("Error: something went wrong")
        }
    }
    function getCusomerbid(){
        if(!tokens){
            return "no tokens";
        }
        try{
            axios.get(get_customer_bid_url,{headers:{Authorization: `Bearer ${tokens.access}`}})
            .then(response =>{
                // console.log(response)
                setcustomerBid(response.data)
            
            }).catch(error=>handleError(error))
        }
        catch{
            console.log("Error: something went wrong")
        }
    }
    function getWonBid(){
        if(!tokens){
            return "no tokens";
        }
        try{
            axios.get(get_win_bid_url,{headers:{Authorization: `Bearer ${tokens.access}`}})
            .then(response =>{
                // console.log(response)
                setwinnerbid(response.data)
            
            }).catch(error=>handleError(error))
        }
        catch{
            console.log("Error: something went wrong")
        }
    }
    ///////////////////////update price/////////////
    function updatePrice(item, newPrice) {
        // if (!tokens) {
        //     return "no tokens";
        // }
        try {
            const updatePriceUrl = update_price_url+`${item.id}/`;
            axios.put(updatePriceUrl, { current_price: newPrice }, { headers: { Authorization: `Bearer ${tokens.access}` } })
                .then(response => {
                    return response.data
                })
                .catch(error => handleError(error));
        } catch(error) {
            console.log(error);
        }
      }
      function AddArt(obj){
        if(!tokens){
            return "no tokens";
        }
        try{
            console.log(tokens)
            axios.post(post_artist_art_url,obj,{headers:{Authorization: `Bearer ${tokens.access}`}})
            .then(response =>{
                // console.log(response)
                return response.data

            }).catch(error=>handleError(error))
        }
        catch{
            console.log("Error: something went wrong")
        }
    }
      
    

    return{

        getArts : art ,
        getInvontry: inventory,
        physicalArts : physArt,
        phyloading: physArt && !physError,
        digitalArt : digital,
        photography: photos,
        getArtsArtist: ArtistArt,
        getSoldArtistArt: soldArtistArt,
        CustomerBid: customerBid,
        WonBid: winnerbid,
        loading : tokens && !error && !data ,
        updatePrice,
        AddArt,
        getArtResource,
        getDigitalArt,
        getPhotography,
        getPhysical,
    }
}