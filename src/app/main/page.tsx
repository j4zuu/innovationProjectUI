"use client"

import React from "react";
import TopBar from "@/app/components/TopBar";
import Feed from "@/app/components/Feed";
import TempCard from "@/app/components/TempCard";
import { fetchDataWithToken } from "../auth/apiUtils";

const temp1: number = 1
const temp2: number = 2
const temp3: number = 3
const temp4: number = 4

fetchDataWithToken()

const Page = () => {
    return (
        <div className="mainArea">  
            <TopBar/>
            <Feed/>
            <div className="base">
                <TempCard temp={temp1}/>
                <TempCard temp={temp2}/>
                <TempCard temp={temp3}/>
                <TempCard temp={temp4}/>
            </div>

        </div>
    )
}
export default Page