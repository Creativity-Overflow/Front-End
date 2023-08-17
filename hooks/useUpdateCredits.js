import { useAuth } from "@/contexts/auth";
import axios from "axios";
import useSWR from 'swr';

export function useCredits() {
    const url = process.env.NEXT_PUBLIC_BASE_URL + "accounts/update_credits/";
    const getUrl = process.env.NEXT_PUBLIC_BASE_URL + "accounts/get_user/";
    const { data, error } = useSWR([url], updateCredits); // Pass single URL as key

    // async function getDetail(id) {
    //     try {
    //         const res = await axios.get(`${getUrl}${id}/`);
    //         console.log(res.data);
    //         return res.data;
    //     } catch {
    //         console.log("Error: something went wrong with getting user");
    //     }
    // }

    async function updateCredits(money, id) {
        try {
            const item = await getUserData(getUrl + `${id}/`); // Use getUserData function
            console.log("bidder :" ,item)
            const credits = item.credits + money;
            const res = await axios.put(url + `${item.user_id}/`, { 'credits': credits });
            return res.data;
        } catch {
            console.log("Error: something went wrong with update credits");
        }
    }

    return {
        updateCredits,
    };
}
