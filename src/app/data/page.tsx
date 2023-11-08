


"use client"
import React from "react";
import TopBar from "@/app/components/TopBar";
import Feed from "@/app/components/Feed";
import TempCard from "@/app/components/TempCard";
import {fetchDataWithToken, fetchTemperatureData} from "../auth/apiUtils";
import TemperatureComponent from "../components/TemperatureComponent";

fetchTemperatureData()

const Page = () => {
    return (
        <div className="mainAreaTemp">
            <TopBar/>
            <TemperatureComponent/>   
            <p>(data is in console)</p>
        </div>
    )
}    
export default Page