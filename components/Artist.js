import React from 'react';
import ArtistProfile from './Artist_detail';
import CategoryList from "@/components/Category";



const UserProfile = () => {
  return (
    <>
      <ArtistProfile />
      <div>
      <CategoryList  />
      </div>
      
 
      </>
  );
};
export default UserProfile;