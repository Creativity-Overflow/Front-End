import axios from "axios";
import useSWR from 'swr';
import { useResource } from "./useResousrce";
import { useArtDetail } from "./useArtDetail";

export function useArtistArt() {
  const url = process.env.NEXT_PUBLIC_BASE_URL + "api/v1/arts/artist-art/";
  const tokens = localStorage.getItem('tokens')
  const access = localStorage.getItem('access')
  const { createResource } = useResource();
  const { updateArtDetail } = useArtDetail();
  const { data, error, mutate } = useSWR([url, tokens], getArtistArts);

  async function getArtistArts() {
    if (!tokens) {
      return "no tokens";
    }
    const tok = JSON.parse(access)
    console.log("tok",tok)
    try {
      console.log("tok",tok)
      const res = await axios.get(url, { headers: { Authorization: `Bearer ${tok}` } });
      console.log(res.data)
      return res.data;
    } catch {
      console.log("Error: something went wrong with art");
    }
  }

  async function createArtistArtResource(info) {
    if (!tokens) {
      return;
    }
    const tok = JSON.parse(access)
    try {
        await axios.post(url,info,{headers:{Authorization: `Bearer ${tok}`}})
        mutate(); // collect the data again
    } catch (err) {
      console.log("Error in Artist art")
    }
  }

  async function updateArtistArt(info, id) {
    if (!tokens) {
      return;
    }
    const tok = JSON.parse(access)
    try {
      await axios.put(url+`${id}/` ,info, {headers:{Authorization: `Bearer ${tok}`}} )
      mutate(); // collect the data again
    } catch (err) {
      console.log("error with updating art");
    }
  }

  return {
    resource: data,
    loading: !error && !data,
    createArtistArtResource,
    updateArtistArt,
  };
}
