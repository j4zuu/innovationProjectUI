'use client'
import TopBar from "./components/TopBar"
import React from "react";

//import MainArea from "./components/MainArea"
import {cookies} from "next/headers";
import {redirect} from "next/navigation";


const Home = () => {
    // Check if we have authorization token saved
    //const token = localStorage.getItem('token')
    //if (!token){
        redirect("/login")
    //}
    return (
        <main>
            You should not be here
        </main>
    )
}

export default Home