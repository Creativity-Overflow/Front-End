import React, { useState } from "react";
import { useResource } from "@/hooks/useResousrce";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

export function ArtTabs() {

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const [activeTab, setActiveTab] = useState("digital_art");
    const { getArts } = useResource()

    const handleTabClick = (category) => {
        setActiveTab(category);
    };

    const physical = getArts.filter((item) => item.category === "physical_art");
    const digital = getArts.filter((item) => item.category === "digital_art");
    const photography = getArts.filter((item) => item.category === "photography");

    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                }}
            >
                <Tab
                    value="physical_art"
                    onClick={() => handleTabClick("physical_art")}
                    className={activeTab === "physical_art" ? "text-gray-900" : ""}
                >
                    <div class="relative px-6 py-3 font-bold text-white rounded-lg group">
                        <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                        <span class="relative">Physical Art</span>
                    </div>
                </Tab>
                <Tab
                    value="digital_art"
                    onClick={() => handleTabClick("digital_art")}
                    className={activeTab === "digital_art" ? "text-gray-900" : ""}
                >
                    <div class="relative px-6 py-3 font-bold text-white rounded-lg group">
                        <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                        <span class="relative">Digital Art</span>
                    </div>
                </Tab>
                <Tab
                    value="photography"
                    onClick={() => handleTabClick("photography")}
                    className={activeTab === "photography" ? "text-gray-900" : ""}
                >

                    <div class="relative px-6 py-3 font-bold text-white rounded-lg group">
                        <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                        <span class="relative">Photography</span>
                    </div>

                </Tab>
            </TabsHeader>
            <TabsBody>
                <TabPanel value="physical_art">
                    <div className="slides-container  flex flex-wrap justify-center m-2 snap-x snap-mandatory overflow-hidden space-x-2 rounded scroll-smooth  " >
                        {physical.map((card, index) => (
                            <div key={index} className="slide aspect-square flex-shrink-0 snap-center rounded overflow-hidden relative">
                                <div className={"card"} style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", height: "100%", width: "350px" }}>
                                    <div className="image"></div>
                                    <div className="content ">
                                        <h2 className="title">{card.name}</h2>
                                        <p className="copy">{card.artist_name}</p>
                                        <p className="copy">{card.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel value="digital_art">
                    <div className="slides-container  flex flex-wrap justify-center m-2 snap-x snap-mandatory overflow-hidden space-x-2 rounded scroll-smooth  " >
                        {digital.map((card, index) => (
                            <div key={index} className="slide aspect-square flex-shrink-0 snap-center rounded overflow-hidden relative">
                                <div className={"card"} style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", height: "100%", width: "350px", margin: "20px" }}>
                                    <div className="image"></div>
                                    <div className="content ">
                                        <h2 className="title">{card.name}</h2>
                                        <p className="copy">{card.artist_name}</p>
                                        <p className="copy">{card.category}</p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel value="photography">
                    <div className="slides-container  flex flex-wrap justify-center m-2 snap-x snap-mandatory overflow-hidden space-x-2 rounded scroll-smooth  " >
                        {photography.map((card, index) => (
                            <div key={index} className="slide aspect-square flex-shrink-0 snap-center rounded overflow-hidden relative">
                                <div className={"card"} style={{ backgroundImage: `url(${card.image})`, backgroundSize: "cover", height: "100%", width: "350px" }}>
                                    <div className="image"></div>
                                    <div className="content ">
                                        <h2 className="title">{card.name}</h2>
                                        <p className="copy">{card.artist_name}</p>
                                        <p className="copy">{card.category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </TabsBody>
        </Tabs>
    );
}
