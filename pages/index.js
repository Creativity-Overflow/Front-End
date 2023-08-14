
import Slider3d from "@/components/Slider3d"
import ReversedSlider from "@/components/ReversedSlider"
import CategorySlider from "@/components/CategorySlider"
import { useResource } from "@/hooks/useResousrce";
import { useAuth } from "../contexts/auth";
import { ArtTabs } from "@/components/ArtTabs";
import WallArts from "@/components/WallArt";
import PanalCat from "@/components/PanalCat";

// import PersonalCard from "@/components/PersonalCards"
// import Slider from "@/components/Background";
// import ButtonHome from "@/components/HomeBotton";
// import Card3d from "@/components/Card3d";


export default function Home() {


  const { getArts } = useResource()
  console.log(getArts)



  const physical = getArts.filter((item) => item.category === 'physical_art')
  const digital = getArts.filter((item) => item.category === 'digital_art')
  const photography = getArts.filter((item) => item.category === 'photography')
  // const photography = getArts.filter((item)=> item.category === 'photography').slice(0,10)



  function test() {
    console.log(getArts)
  }
  return (
    <>



      <div className="flex flex-col align-middle" >

        <div style={{ "height": "90vh" }}>
          <Slider3d />
        </div>
        <hr
          class="my-10 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="border-r-8">
          <ArtTabs />
        </div>
        <hr
          class="my-10 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <div className="min-h-screen">
          <WallArts />
        </div>
        <hr
          class="my-10 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
        <PanalCat />
        <hr
          class="my-10 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

        <div className="min-h-screen">
          <ReversedSlider />
        </div>



        {/* <div className="min-h-screen">
          <CategorySlider data = {physical} categoryname = "Physical Art"/>
        </div>  */}
        {/* <div className="min-h-screen">
          <CategorySlider data={digital} categoryname="Digital Art" />
        </div> */}
        {/* <div className="min-h-screen">
          <CategorySlider data = {photography} categoryname = "Photography Art"/>
        </div>  */}


        {/* <Card3d /> */}
        {/* <Slider data={digital} categoryname="Digital Art"/> */}
        {/* 
        {/* <PersonalCard />  */}
        {/* <DialogCustomAnimation />  */}
        {/* <ButtonHome /> */}

      </div>



    </>
  );
}
