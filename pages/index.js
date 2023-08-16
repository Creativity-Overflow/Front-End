
import Slider3d from "@/components/Slider3d"
import ReversedSlider from "@/components/ReversedSlider"
import CategorySlider from "@/components/CategorySlider"

import { useAuth } from "../contexts/auth";
import { ArtTabs } from "@/components/ArtTabs";
import WallArts from "@/components/WallArt";
import PanalCat from "@/components/PanalCat";
export default function Home() {
  return (
    <>
      <div className="flex flex-col align-middle" >
        <div style={{ "height": "90vh" }}>
          <Slider3d />
        </div>
       
        <div className="border-r-8">
          <ArtTabs />
        </div>
     
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
      </div>
    </>
  );
}
