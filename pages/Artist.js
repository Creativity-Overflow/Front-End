import Image from "next/image";
import Artist from "@/components/Artist";
import ArtTabs from "@/components/Category";
import ArtistProfile from '../components/Artist_detail';




export default function Artist_user() {
  return (
    <>
        <div>
          <ArtistProfile />
          <ArtTabs />
        </div>
    </>
  );
}