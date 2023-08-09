import Parents from "@/components/Parents";
import Slider3d from "@/components/Slider3d"
import ReversedSlider from "@/components/ReversedSlider"
import PersonalCard from "@/components/PersonalCards"
import CategorySlider from "@/components/CategorySlider"
// import ButtonHome from "@/components/HomeBotton";
// import Card3d from "@/components/Card3d";

export default function Home() {

  return (
    <>


      <Parents>
        <div className="flex flex-col align-middle">
          <div style={{"height":"90vh"}}>
            <Slider3d />
          </div>

          {/* <div className="min-h-screen">
            <ReversedSlider />
          </div> */}

          {/* <PersonalCard /> */}
          <div className="min-h-screen">
            <CategorySlider />
          </div>
          <div className="min-h-screen">
            <CategorySlider />
          </div>
          <div className="min-h-screen">
            <CategorySlider />
          </div>

          {/* <ButtonHome /> */}

          {/* <Card3d /> */}
        </div>


      </Parents>
    </>
  );
}