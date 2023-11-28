
"use client"
import React from "react";
import TopBar from "@/app/components/TopBar";
import ChartComponent from "../components/ChartComponent";
import Feed from "../components/Feed";
import "../styles.css";


const Page = () => {
    return (
        <div className="main">
            <TopBar/>
            <ChartComponent/>
        </div>
    )  
}    
export default Page