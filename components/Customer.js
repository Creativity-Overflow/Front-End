import React from 'react';
const categories = [
    'On going bid',
    'Winner',
  ];
export default function Customer () {

  return (
    <>
    <div className="flex flex-wrap gap-4 justify-center items-center mt-20">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
        >
          {category}
        </div>
      ))}
    </div>
    </>
  );
};

// export default UserProfile;
