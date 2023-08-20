import { useAuth } from "@/contexts/auth";
import ButtonArt from "./ButtonArt";
import { TfiEmail } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { BiMoneyWithdraw } from "react-icons/bi";

export default function ArtistProfile() {
  const { username, email, image, credits } = useAuth();
  

  // const local = localStorage.getItem("authState") 
  // const userData= decode(local.access)
  return (
    <div className="justify-center p-8 bg-black max-w-screen sm:flex sm:space-x-6 bg-opacity-60 dark:text-gray-100">
      <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
        
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-around text-3xl">
          <img
            src={image}
            alt="Profile"
            className="mr-48 w-52 h-30 "
            style={{ width: '350px', height: '450px' }}
          />
          <div className="">
            <div className="flex items-center gap-8">
              <CgProfile size={101} className="text-white" />
              <p className="mr-32 text-white ">{username}</p>
            </div>
            <br>
            </br>
            <br>
            </br>
            <div className="flex items-center gap-8">
              <TfiEmail size={101} className="text-white" />
              <p className="text-white">{email}</p>
            </div>
            <br>
            </br>
            <div className="flex items-center gap-8">
              <BiMoneyWithdraw size={101} className="text-white" />
              <p className="text-white">{credits}</p>
            </div>

            <ButtonArt />
          </div>
        </div>
      </div>
    </div>
  );
};

