import Login from "@/app/components/Login";
//import MainArea from "@/app/components/MainArea";
import TopBar from "@/app/components/TopBar";

const Page = () => {
    return (
        <div className="mainArea">
            <TopBar/>
            <Login/>
        </div>
    )
}

export default Page