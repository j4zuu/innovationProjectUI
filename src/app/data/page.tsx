
"use client"
import React from "react";
import TopBar from "@/app/components/TopBar";
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