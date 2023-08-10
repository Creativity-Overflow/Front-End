import Parents from "@/components/Parents";
import Slider3d from "@/components/Slider3d"
import ReversedSlider from "@/components/ReversedSlider"
import PersonalCard from "@/components/PersonalCards"
import CategorySlider from "@/components/CategorySlider"
import { useResource } from "@/hooks/useResousrce";
import { useAuth } from "../contexts/auth";
// import ButtonHome from "@/components/HomeBotton";
// import Card3d from "@/components/Card3d";

export default function Home() {

  const { getArts } = useResource()
  console.log(getArts)
  const { login, username, logout } = useAuth()



  function test() {
    console.log(getInvontry, getArts)
  }
  return (
    <>


      
        <div className="flex flex-col align-middle">
          <button onClick={test}> on click </button>
          {username  ? (
            <>
              <button onClick={() => logout()}> logout </button>
              <p > Welcome {username}</p>
              {/* <Nawrs data={getArts} /> */}
            </>
          ) : (
            <>
              <button onClick={() => login("mustafaa", "0000")}> login </button>
              <p>need to log in</p>
            </>
          )}





          <div style={{"height":"90vh"}}>
            <Slider3d />
          </div>

          {/* <div className="min-h-screen">
            <ReversedSlider />
          </div> */}

          {/* <PersonalCard /> */}
          {/* <div className="min-h-screen">
            <CategorySlider />
          </div>
          <div className="min-h-screen">
            <CategorySlider />
          </div>
          <div className="min-h-screen">
            <CategorySlider />
          </div> */}


          {/* <ButtonHome /> */}

          {/* <Card3d /> */}
        </div>


      
    </>
  );
}

// function Nawrs({ data }) {
//   return (
//     <>
//       <div className="bg-white ">
//         {data.map(item => (
//           <li key={item.user_id}>
//             <span>{item.description}</span>
//           </li>))}
//       </div>

//     </>
//   );
// }