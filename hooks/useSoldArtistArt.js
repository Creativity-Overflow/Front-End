import axios from "axios" ;
import useSWR from 'swr' ;
export function useSoldArtistArt(){
    const url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/sold-artist-art/"
    const tokens = localStorage.getItem('tokens')
    const access = localStorage.getItem('access')
    const {data,error,mutate} = useSWR([url,tokens],getSoldArtist)

    async function getSoldArtist(){
        const tok = JSON.parse(access)
        try{
            const res = await axios.get(url,{headers:{Authorization: `Bearer ${tok}`}})
            console.log(res.data)
            return res.data
        }
        catch{
            console.log("Error: something went wrong with art")
        }
    }
   
    return{
        artistSold:data,
        loading :!tokens && !error && !data ,
    }
}
