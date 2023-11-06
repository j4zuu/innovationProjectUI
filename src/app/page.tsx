'use client'
import TopBar from "./components/TopBar"
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
            <TopBar/>
        </main>
    )
}

export default Home