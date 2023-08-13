import { useAuth } from "@/contexts/auth";
export default function ArtistProfile ()  {
    const {username,email} = useAuth();
    return (
      <>
      <div className="flex justify-center items-center h-[screen]">
      <div className="p-4 shadow-md rounded-3xl border border-[black] w-[80%] flex justify-center items-center h-[80%] mt-16" style={{ background: "rgba(0,0,0,.7)" }}>
        <div className="flex items-center justify-around text-5xl"> 
          <img
            src="/images/mustafa-image.jpg"
            alt="Profile"
            className="w-20 h-20 mr-72 " 
            style={{ width: '400px', height: '500px' }} 
          />
          <div>
            <p className="text-gray-600">{username}</p>
            <p className="text-gray-600">{email}</p>
            <p className="text-gray-500">Jordan-Blue city</p>
          </div>
          </div>
        </div>
        </div>
        </>
        );
};