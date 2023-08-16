import { useAuth } from "@/contexts/auth";
import ButtonArt from "./ButtonArt";
import { decode } from "jsonwebtoken";

export default function ArtistProfile ()  {
    const {username,email, image ,credits} = useAuth();

    // const local = localStorage.getItem("authState") 
    // const userData= decode(local.access)
    return (
      <>
      <div className="flex justify-center items-center h-[screen]">
      <div className="p-4 shadow-md rounded-3xl border border-[black] w-[80%] flex justify-center items-center h-[80%] mt-11" style={{ background: "rgba(0,0,0,.7)" }}>
        <div className="flex items-center justify-around text-5xl"> 
          <img
            src={image}
            alt="Profile"
            className="w-52 h-30 mr-48 "
            style={{ width: '450px', height: '550px' }} 
          />
          <div className="mr-36">
            <p className="text-white mr-52 mt-11">{username}</p>
            <br>
            </br>
            <br>
            </br>
            <p className="text-white">{email}</p>
            <br>
            </br>
            <p className="text-white">{credits}</p>

            <ButtonArt />
          </div>
          </div>
        </div>
        </div>
        </>
        );
};
