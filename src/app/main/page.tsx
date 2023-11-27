"use client"
import React, {useEffect, useState} from "react";
import TopBar from "@/app/components/TopBar";
import Feed from "@/app/components/Feed";
import TempCard from "@/app/components/TempCard";
import {fetchDataWithToken, postRoom} from "../auth/apiUtils";


const Page = () => {
    const [roomData, setRoomData] = useState<any[]>([]);
    useEffect(() => {
        fetchDataWithToken()
            .then((response) => {
                if (Array.isArray(response)) {
                    setRoomData(response);
                } else {
                    console.error("Data from fetchDataWithToken is not an array.");
                    setRoomData([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const roomDivs = roomData.map((room, id) => (
        <div key={id}>
            <TempCard name={room.name}/>
        </div>
    ));

    return (
        <div className="main">
            <TopBar/>
            <Feed/>
            <div className="base">
                {roomDivs}
            </div>
        </div>
    );
};

export default Page;