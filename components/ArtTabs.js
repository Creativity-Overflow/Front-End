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
    const { resource,loading } = useResource()

    const handleTabClick = (category) => {
        setActiveTab(category);
    };
    if (loading) {return <>loading ... </>}
    const physical = resource.filter((item) => item.category === "physical_art");
    const digital = resource.filter((item) => item.category === "digital_art");
    const photography = resource.filter((item) => item.category === "photography");

    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="p-0 bg-transparent border-b rounded-none border-blue-gray-50"
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
                    <a className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-md shadow-2xl  hover:text-white group" style={{ "width": "180px", "align-self": "center" }}>
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-20 bg-gradient-to-br from-pink-200 via-purple-700 to-blue-200 group-hover:opacity-100"></span>
                        {/* <!-- Top glass gradient --> */}
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        {/* <!-- Bottom gradient --> */}
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        {/* <!-- Left gradient --> */}
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        {/* <!-- Right gradient --> */}
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">physical art</span>
                    </a>
                </Tab>
                <Tab
                    value="digital_art"
                    onClick={() => handleTabClick("digital_art")}
                    className={activeTab === "digital_art" ? "text-gray-900" : ""}
                >
                    <a className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-md shadow-2xl  hover:text-white group" style={{ "width": "180px", "align-self": "center" }}>
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-20 bg-gradient-to-br from-pink-200 via-purple-700 to-blue-200 group-hover:opacity-100"></span>
                        {/* <!-- Top glass gradient --> */}
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        {/* <!-- Bottom gradient --> */}
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        {/* <!-- Left gradient --> */}
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        {/* <!-- Right gradient --> */}
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">Digital Art</span>
                    </a>
                </Tab>
                <Tab
                    value="photography"
                    onClick={() => handleTabClick("photography")}
                    className={activeTab === "photography" ? "text-gray-900" : ""}
                >

                    <a className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold rounded-md shadow-2xl  hover:text-white group" style={{ "width": "180px", "align-self": "center" }}>
                        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-20 bg-gradient-to-br from-pink-200 via-purple-700 to-blue-200 group-hover:opacity-100"></span>
                        {/* <!-- Top glass gradient --> */}
                        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                        {/* <!-- Bottom gradient --> */}
                        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                        {/* <!-- Left gradient --> */}
                        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                        {/* <!-- Right gradient --> */}
                        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                        <span className="relative">photography</span>
                    </a>

                </Tab>
            </TabsHeader>
            <TabsBody>
                <TabPanel value="physical_art">
                    <div className="flex flex-wrap justify-center m-2 space-x-2 overflow-hidden rounded slides-container snap-x snap-mandatory scroll-smooth " >
                        {physical.map((card, index) => (
                            <div key={index} className="relative flex-shrink-0 overflow-hidden rounded slide aspect-square snap-center">
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
                <TabPanel value="digital_art">
                    <div className="flex flex-wrap justify-center m-2 space-x-2 overflow-hidden rounded slides-container snap-x snap-mandatory scroll-smooth " >
                        {digital.map((card, index) => (
                            <div key={index} className="relative flex-shrink-0 overflow-hidden rounded slide aspect-square snap-center">
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
                    <div className="flex flex-wrap justify-center m-2 space-x-2 overflow-hidden rounded slides-container snap-x snap-mandatory scroll-smooth " >
                        {photography.map((card, index) => (
                            <div key={index} className="relative flex-shrink-0 overflow-hidden rounded slide aspect-square snap-center">
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
            </TabsBody>
        </Tabs>
    );
}
