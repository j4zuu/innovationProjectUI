
"use client"
import React from "react";
import TopBar from "@/app/components/TopBar";
import Feed from "@/app/components/Feed";
import TempCard from "@/app/components/TempCard";
import {fetchDataWithToken, fetchTemperatureData} from "../auth/apiUtils";
import TemperatureComponent from "../components/TemperatureComponent";
import ChartComponent from "../components/ChartComponent";


const Page = () => {
    return (
        <div className="main">
            <TopBar/>
            <ChartComponent/>
        </div>
    )  
}    
export default Page