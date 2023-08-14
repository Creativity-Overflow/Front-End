
import Image from "next/image";
import Artist from "@/components/Artist";
import CategoryList from "@/components/Category";
import ArtistProfile from '../components/Artist_detail';

export default function Artist_user() {
  return (
    <>
        <div>
          <ArtistProfile />
          <CategoryList />
        </div>
    </>
  );
}