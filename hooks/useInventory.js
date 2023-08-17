import axios from "axios" ;
import useSWR from 'swr' ;
export function useInventory(){
    const url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/inventory/"
    const tokens = localStorage.getItem('tokens');
    const access = localStorage.getItem('access');
    const {data,error,mutate} = useSWR([url,tokens],getInventoryItems)

    async function getInventoryItems(){
        if(!tokens){
            return "no tokens";
        }
        try{
            const tok = JSON.parse(access)
            console.log(tok)
            const res = await axios.get(url,{headers:{Authorization: `Bearer ${tok}`}})
            console.log(res.data)
            return res.data
        }
        catch{
            console.log("Error in the inventory get")
        }
    }
    /////////////////create inventory element /////////////
    async function createInventoryElement(info){
        if (!tokens) {
            return;
        }

        try {
            await createResource(info)
            mutate(); //collect the data again
        }
        catch(err){
            console.log("Error in the inventory create")
        }
    }
    ////////////////////Update Inventory ///////////////////
    async function updateInventory(info,id){
        if (!tokens) {
            return;
        }
        try {
            const tok = JSON.parse(access)
            await axios.put(url+`${id}/`,info,{headers:{Authorization: `Bearer ${tok}`}})
            mutate(); //collect the data again
        }
        catch(err){
            console.log("Error in the inventory update")
        }
    }
    return{
        data : data,
        loading : tokens && !error && !data ,
        createInventoryElement,
        updateInventory,
    }
}
