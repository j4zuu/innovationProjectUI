"use client"
import Login from "@/app/components/Login";
//import MainArea from "@/app/components/MainArea";
import TopBar from "@/app/components/TopBar";

const Page = () => {
    return (
        <div className="main">
            <TopBar burger={false}/>
            <Login/>
        </div>
    )
}

export default Page